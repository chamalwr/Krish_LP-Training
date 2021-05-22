package dev.chamalwr;

public class Main {
    public static void main(String[] args) {
        Lamborghini huracan = new Lamborghini();
        huracan.engineSet();
        huracan.shifts();
        huracan.drive();

        System.out.println();

        LaFerrari aperta = new LaFerrari();
        aperta.engineSet();
        aperta.shifts();
        aperta.drive();
    }
}
