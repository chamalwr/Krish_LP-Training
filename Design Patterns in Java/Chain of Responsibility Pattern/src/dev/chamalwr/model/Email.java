package dev.chamalwr.model;

public class Email {
    private String sender;
    private String receiver;
    private String senderDomain;
    private String receiverDomain;
    private String content;
    private boolean attachments;


    public Email() {
    }

    public Email(String sender, String receiver, String senderDomain, String receiverDomain, String content,
                 boolean attachments) {
        this.sender = sender;
        this.receiver = receiver;
        this.senderDomain = senderDomain;
        this.receiverDomain = receiverDomain;
        this.content = content;
        this.attachments = attachments;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getSenderDomain() {
        return senderDomain;
    }

    public void setSenderDomain(String senderDomain) {
        this.senderDomain = senderDomain;
    }

    public String getReceiverDomain() {
        return receiverDomain;
    }

    public void setReceiverDomain(String receiverDomain) {
        this.receiverDomain = receiverDomain;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isAttachments() {
        return attachments;
    }

    public void setAttachments(boolean attachments) {
        this.attachments = attachments;
    }
}