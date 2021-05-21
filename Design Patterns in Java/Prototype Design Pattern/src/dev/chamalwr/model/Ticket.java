package dev.chamalwr.model;

import java.time.ZonedDateTime;

public abstract class Ticket implements Cloneable{
    private String departure;
    private String arrival;
    private ZonedDateTime departureDateTime;
    private ZonedDateTime arrivalDateTime;

    public Ticket() {
    }

    public Ticket(String departure, String arrival, ZonedDateTime departureDateTime,
                  ZonedDateTime arrivalDateTime) {
        this.departure = departure;
        this.arrival = arrival;
        this.departureDateTime = departureDateTime;
        this.arrivalDateTime = arrivalDateTime;
    }

    public String getDeparture() {
        return departure;
    }

    public void setDeparture(String departure) {
        this.departure = departure;
    }

    public String getArrival() {
        return arrival;
    }

    public void setArrival(String arrival) {
        this.arrival = arrival;
    }

    public ZonedDateTime getDepartureDateTime() {
        return departureDateTime;
    }

    public void setDepartureDateTime(ZonedDateTime departureDateTime) {
        this.departureDateTime = departureDateTime;
    }

    public ZonedDateTime getArrivalDateTime() {
        return arrivalDateTime;
    }

    public void setArrivalDateTime(ZonedDateTime arrivalDateTime) {
        this.arrivalDateTime = arrivalDateTime;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    @Override
    public String toString() {
        return "Ticket{" +
                ", departure='" + departure + '\'' +
                ", arrival='" + arrival + '\'' +
                ", departureDateTime=" + departureDateTime +
                ", arrivalDateTime=" + arrivalDateTime +
                '}';
    }
}
