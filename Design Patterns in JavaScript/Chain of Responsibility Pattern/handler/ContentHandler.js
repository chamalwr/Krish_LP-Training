const EmailHandler = require("./EmailHandler");

module.exports = class ContentHandler extends EmailHandler{
    contentToAvoid = "malicious"

    checkMail(email){
        let formattedText = email.content.toString().toLowerCase()
        if (!formattedText.includes(this.contentToAvoid)){
            console.log("Email is safe!")
            if (this.successorHandler != null){
                this.successorHandler.checkMail(email)
            }
        }else{
            console.log("Email Contains Malicious Content")
        }
    }
}
