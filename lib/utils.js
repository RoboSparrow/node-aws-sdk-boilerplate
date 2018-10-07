const fs = require('fs');
const path = require('path');
const http = require('http');

/**
 * Parses data into a JSON file and returns data gain (fro promise chaiuns)
 * @returns {Promise}
 */
const toJsonFile = function(data, file) {
    const json = JSON.stringify(data, null, 4);
    const p = path.resolve(file);

    fs.writeFileSync(p, json, 'utf8');
    return data; // for further processing
};

/**
 * Fetches a file via http
 * @returns {Promise}
 */
const httpGet = function(url) {
    return new Promise(function(resolve, reject) {
        const req = http.get(url)
        .on('response', function(response) {
            let body = '';
            response.on('data', function(chunk) {
                body += chunk;
            });
            response.on('end', function() {
                resolve(body);
            });
        });

        req.on('error', function(error) {
            reject(error);
        });
    });
};

module.exports = {
    toJsonFile,
    httpGet,
};
