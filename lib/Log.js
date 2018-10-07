const colors = require('./colors');

const log = function(status, message) {
    let m = message;
    if (message instanceof Error) {
        status = 'error';
        m = message.toString();
    }

    switch (status) {

        case 'error':
            m = colors.red(m);
            break;

        case 'success':
            m = colors.green(m);
            break;

        case 'note':
            m = colors.yellow(m);
            break;

        default:
            //nothing
    }

    console.log(m);
};

const Log = {
    error: function(message, ret) {
        log('error', message);
        return ret;
    },

    success: function(message, ret) {
        log('success', message);
        return ret;
    },

    note: function(message, ret) {
        log('note', message);
        return ret;
    },

    log: function(message, ret) {
        log('log', message);
        return ret;
    },
};

module.exports = Log;
