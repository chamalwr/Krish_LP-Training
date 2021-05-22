package dev.chamalwr;

import dev.chamalwr.model.BusinessTicket;
import dev.chamalwr.model.TicketType;

public class Main {
    public static void main(String[] args) {
        TicketCounter ticketCounter = new TicketCounter();

        BusinessTicket businessTicketOne = (BusinessTicket) ticketCounter.getTicket(TicketType.BUSINESS_CLASS);

        //Before Change
        System.out.println(businessTicketOne);

        //Change arrival airport
        businessTicketOne.setArrival("Paris Charles de Gaulle Airport");
        //Change Lounge code
        businessTicketOne.setCabinCode(996);

        //After Change
        System.out.println(businessTicketOne);

        //getting the same object
        BusinessTicket businessTicketTwo = (BusinessTicket) ticketCounter.getTicket(TicketType.BUSINESS_CLASS);


        System.out.println(businessTicketTwo);
    }
}
