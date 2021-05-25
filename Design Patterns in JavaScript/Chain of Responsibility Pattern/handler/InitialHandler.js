const EmailHandler = require("./EmailHandler");

module.exports = class InitialHandler extends EmailHandler{

    checkMail(email) {
        this.successorHandler.checkMail(email);
    }
}
