package dev.chamalwr.handler;

import dev.chamalwr.model.Email;

/**This handler responsible of checking
 * email contains malicious content
 **/
public class ContentHandler extends EmailHandler{
    @Override
    public void checkMail(Email email) {
        String contentFormatted= email.getContent().toLowerCase();
        if (!contentFormatted.contains("malicious")){
            System.out.println("Email is clean! Delivered Successfully");
        }else{
            System.err.println("Email has malicious content");
        }
    }
}
