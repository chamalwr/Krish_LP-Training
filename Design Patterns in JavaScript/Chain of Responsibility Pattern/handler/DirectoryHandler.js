const EmailHandler = require("./EmailHandler");

module.exports = class DirectoryHandler extends EmailHandler{
    data = {
         "ceo@luxWatches.com": "CEO Office",
         "calvin@luxWatches.com": "Chief Designer Office",
         "gosling@luxWatches.com": "Supply Chain Management",
         "klein@luxWatches.com": "Engineer Office"
    }

    checkMail(email){
       if (this.data[email.receiver]){
           console.log("Receiver Identified")
           console.log("This will directed to the : " + this.data[email.receiver])
           if (this.successorHandler != null){
               this.successorHandler.checkMail(email)
           }
       }else{
           console.log("Receiver not found!")
       }
    }
}
