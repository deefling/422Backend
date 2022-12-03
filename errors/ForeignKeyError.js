const { ErrorLogger } = require('./ErrorLogger.js')

class ForeignKeyError extends ErrorLogger{
    constructor(message) {
        super();
        this.message = message;
        this.name = "ForeignKeyError";
    }
}

module.exports.ForeignKeyError = ForeignKeyError;