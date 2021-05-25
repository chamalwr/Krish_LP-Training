module.exports = class Email{
    sender;
    receiver;
    senderDomain;
    receiverDomain;
    content;

    constructor(sender, receiver, senderDomain, receiverDomain, content) {
        this.sender = sender;
        this.receiver = receiver;
        this.senderDomain = senderDomain;
        this.receiverDomain = receiverDomain;
        this.content = content;
    }
}
