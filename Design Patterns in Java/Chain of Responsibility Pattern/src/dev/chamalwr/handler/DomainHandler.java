package dev.chamalwr.handler;

import dev.chamalwr.model.Email;

/**This handler responsible of checking
 * the email is coming from the the internal mail system
 * of the company
 **/
public class DomainHandler extends EmailHandler {

    private String companyDomain =  "luxWatches.com";

    @Override
    public void checkMail(Email email) {
        if(email.getSenderDomain().equals(companyDomain)){
            System.out.println("This is an Internal Email from Lux Watches");
            emailHandlerSuccessor.checkMail(email);
        }else{
            System.err.println("This email is from another organization!");
        }
    }
}
