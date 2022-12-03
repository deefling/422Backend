class ForeignKeyError extends Error{
    constructor(message) {
        super();
        this.message = message;
        this.name = "ForeignKeyError";
    }
}

module.exports.ForeignKeyError = ForeignKeyError;