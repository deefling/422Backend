class ErrorLogger extends Error{
    constructor() {
        super();
        const mongoDriver = require('../mongoDriver');
        mongoDriver.logError(this);
    }
}

module.exports.ErrorLogger = ErrorLogger;