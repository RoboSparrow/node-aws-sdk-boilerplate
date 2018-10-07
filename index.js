// boot aws
const AWS = require('aws-sdk');
require('./aws/bootstrap');

const Log = require('./lib/Log');

////
// do stuff!
////

Log.note(`Hello, running AWS SDK version ${AWS.VERSION}`);
