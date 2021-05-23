package dev.chamalwr.handler;

import dev.chamalwr.model.Email;

public abstract class EmailHandler {

    protected EmailHandler emailHandlerSuccessor;

    public void setSuccessor(EmailHandler successor){
        this.emailHandlerSuccessor = successor;
    }

    public abstract void checkMail(Email email);
}
