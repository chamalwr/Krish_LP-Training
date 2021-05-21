package dev.chamalwr.model;

import java.time.ZonedDateTime;

public class EconomyTicket extends Ticket{
    public EconomyTicket() {
    }

    public EconomyTicket(String departure, String arrival, ZonedDateTime departureDateTime, ZonedDateTime arrivalDateTime) {
        super(departure, arrival, departureDateTime, arrivalDateTime);
    }


}
