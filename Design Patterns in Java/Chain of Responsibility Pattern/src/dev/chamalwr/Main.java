package dev.chamalwr;

import dev.chamalwr.handler.ContentHandler;
import dev.chamalwr.handler.DirectoryHandler;
import dev.chamalwr.handler.DomainHandler;
import dev.chamalwr.handler.StarterHandler;
import dev.chamalwr.model.Email;

public class Main {
    public static void main(String[] args) {
        Email internalMail = new Email("gosling@luxWatches.com", "klein@luxWatches.com", "luxWatches.com",
                "luxWatches.com", "New watches are ready to be shipped", false);

        Email emailFromOutside = new Email("hacker@aol.com", "ceo@luxWatches.com", "aol.com",
                "luxWatches.com", "1M Deal! Click Here", false);

        StarterHandler starterHandler = new StarterHandler();
        DirectoryHandler directoryHandler = new DirectoryHandler();
        DomainHandler domainHandler = new DomainHandler();
        ContentHandler contentHandler = new ContentHandler();

        starterHandler.setSuccessor(directoryHandler);
        directoryHandler.setSuccessor(domainHandler);
        domainHandler.setSuccessor(contentHandler);

        //Sending a valid email
        starterHandler.checkMail(internalMail);

        System.out.println();

        //Sending a email from non-domain email
        starterHandler.checkMail(emailFromOutside);
    }
}
