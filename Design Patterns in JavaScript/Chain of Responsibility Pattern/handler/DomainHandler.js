const EmailHandler = require("./EmailHandler");

module.exports = class DomainHandler extends EmailHandler{
    companyDomain = "luxWatches.com";

    checkMail(email){
        if (this.companyDomain === email.senderDomain){
            console.log("This is an Safe internal email")
            if (this.successorHandler != null){
                this.successorHandler.checkMail(email)
            }
        }else {
            console.log("Receiver Not Found on the Domain!")
        }
    }
}
