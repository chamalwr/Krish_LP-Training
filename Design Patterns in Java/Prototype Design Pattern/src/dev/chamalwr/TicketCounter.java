package dev.chamalwr;

import dev.chamalwr.model.BusinessTicket;
import dev.chamalwr.model.EconomyTicket;
import dev.chamalwr.model.Ticket;
import dev.chamalwr.model.TicketType;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.Map;

public class TicketCounter {

    private Map<TicketType, Ticket> ticketRegistry = new HashMap<>();

    public TicketCounter() {
        this.initialize();
    }

    //Create Two type of Tickets and add to the ticketRegistry
    private void initialize() {
        EconomyTicket economyTicket
                = new EconomyTicket("BIA (CMB)", "Zurich (ZRH)",
                ZonedDateTime.of(LocalDate.of(2022,6,12),
                        LocalTime.of(3,45), ZoneId.of("Asia/Colombo")),
                ZonedDateTime.of(LocalDate.of(2022,6,12),
                        LocalTime.of(13,40), ZoneId.of("Europe/Zurich")));

        BusinessTicket businessTicket
                = new BusinessTicket("BIA (CMB)", "Zurich (ZRH)",
                ZonedDateTime.of(LocalDate.of(2022,6,12),
                        LocalTime.of(3,45), ZoneId.of("Asia/Colombo")),
                ZonedDateTime.of(LocalDate.of(2022,6,12),
                        LocalTime.of(13,40), ZoneId.of("Europe/Zurich")),
                "SWISS Alpine Lounge", 666, "BOURBON");

        ticketRegistry.put(TicketType.ECONOMY, economyTicket);
        ticketRegistry.put(TicketType.BUSINESS_CLASS, businessTicket);

    }

    public Ticket getTicket(TicketType ticketType){
        Ticket ticket = null;
        try {
            ticket = (Ticket) ticketRegistry.get(ticketType);
        }catch (Exception err){
            System.err.println(err.getMessage());
        }
        return ticket;
    }
}
