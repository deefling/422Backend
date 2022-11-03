class ForeignKeyError extends Error{
    constructor(message) {
        super();
        this.message = message;
        this.name = "Error"; // (different names for different built-in error classes)
    }
}

module.exports.ForeignKeyError = ForeignKeyError;