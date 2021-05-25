const Email = require("./model/Email");
const InitialHandler = require("./handler/InitialHandler");
const DomainHandler = require("./handler/DomainHandler");
const DirectoryHandler = require("./handler/DirectoryHandler");
const ContentHandler = require("./handler/ContentHandler");


const email = new Email("gosling@luxWatches.com", "klein@luxWatches.com", "luxWatches.com",
    "luxWatches.com", "New watches are ready to be shipped");

let initialHandler = new InitialHandler()
let domainHandler = new DomainHandler();
let directoryHandler = new DirectoryHandler()
let contentHandler = new ContentHandler();

initialHandler.setSuccessor(domainHandler)
domainHandler.setSuccessor(directoryHandler)
directoryHandler.setSuccessor(contentHandler)

initialHandler.checkMail(email)

