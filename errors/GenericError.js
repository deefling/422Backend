const { ErrorLogger } = require('./ErrorLogger.js')

class GenericError extends ErrorLogger{
    constructor(message) {
        super();
        this.message = message;
        this.name = "GenericError";
    }
}

module.exports.GenericError = GenericError;