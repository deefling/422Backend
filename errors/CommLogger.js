class CommLogger {
    constructor() {
        const mongoDriver = require('../mongoDriver');
        mongoDriver.logCommunication(this);
    }
}

module.exports.CommLogger = CommLogger;