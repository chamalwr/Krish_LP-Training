package dev.chamalwr;

public class Lamborghini implements VehicleFunctions{

    @Override
    public void drive() {
        System.out.println("Driving in CORSA mode");
    }

    @Override
    public void shifts() {
        System.out.println("Semi Automatic");
    }

    @Override
    public void engineSet() {
        System.out.println("V-12 Engine set");
    }
}
