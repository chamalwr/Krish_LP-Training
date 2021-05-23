package dev.chamalwr.handler;

import dev.chamalwr.model.Email;

public class StarterHandler extends EmailHandler{
    @Override
    public void checkMail(Email email) {
        emailHandlerSuccessor.checkMail(email);
    }
}
