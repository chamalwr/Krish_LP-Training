package dev.chamalwr.model;

import java.time.ZonedDateTime;

public class BusinessTicket extends Ticket{
    private String loungeInfo;
    private int cabinCode;
    private String preferredBeverage;

    public BusinessTicket() {
    }

    public BusinessTicket(String departure, String arrival, ZonedDateTime departureDateTime,
                          ZonedDateTime arrivalDateTime, String loungeInfo, int cabinCode, String preferredBeverage) {
        super(departure, arrival, departureDateTime, arrivalDateTime);
        this.loungeInfo = loungeInfo;
        this.cabinCode = cabinCode;
        this.preferredBeverage = preferredBeverage;
    }

    public String getLoungeInfo() {
        return loungeInfo;
    }

    public void setLoungeInfo(String loungeInfo) {
        this.loungeInfo = loungeInfo;
    }

    public int getCabinCode() {
        return cabinCode;
    }

    public void setCabinCode(int cabinCode) {
        this.cabinCode = cabinCode;
    }

    public String getPreferredBeverage() {
        return preferredBeverage;
    }

    public void setPreferredBeverage(String preferredBeverage) {
        this.preferredBeverage = preferredBeverage;
    }

    @Override
    public String toString() {
        return "BusinessTicket{" +
                ", departure='" + getDeparture() + '\'' +
                ", arrival='" + getArrival() + '\'' +
                ", departureDateTime=" + getDepartureDateTime() +
                ", arrivalDateTime=" + getArrivalDateTime() +
                ", loungeInfo='" + loungeInfo + '\'' +
                ", cabinCode='" + cabinCode + '\'' +
                ", preferredBeverage='" + preferredBeverage + '\'' +
                '}';
    }
}
