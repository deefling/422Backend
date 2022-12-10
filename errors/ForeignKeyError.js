const { ErrorLogger } = require('./ErrorLogger.js')

class ForeignKeyError extends ErrorLogger{
    constructor(message) {
        super();
        this.message = message;
        this.name = "ForeignKeyError";
    }
}

module.exports.ForeignKeyError = ForeignKeyError;
                         
//                                          ,----.
//                                         / /¯¯\ \
//    .-----.                            _丄丄__丄丄_
//  /  ,---.  \  ___________________    |    ___    |
// |  |     |  ||_________   __   __|   |   (   )   |
//  \  `---'  /           | |  |_|      |    | |    |
//   `-------'            '-'           |    |_|    |
//                                      |___________| 