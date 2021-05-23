package dev.chamalwr.handler;

import dev.chamalwr.model.Email;

import java.util.HashMap;
import java.util.Map;

/**This handler responsible of checking whether the
 * email is available within the directory
**/
public class DirectoryHandler extends EmailHandler{

    Map<String, String> emailDirectory = new HashMap<>();

    public DirectoryHandler() {
        emailDirectory.put("ceo@luxWatches.com", "CEO Office");
        emailDirectory.put("calvin@luxWatches.com", "Chief Designer");
        emailDirectory.put("gosling@luxWatches.com", "Supply Chain Management");
        emailDirectory.put("klein@luxWatches.com", " Engineer");
    }

    @Override
    public void checkMail(Email email) {
        if (emailDirectory.get(email.getReceiver()) != null) {
            System.out.println("Receiver Identified");
            emailHandlerSuccessor.checkMail(email);
        }else{
            System.err.println("Receiver not found!");
        }
    }
}
