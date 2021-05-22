public class LaFerrari implements VehicleFunctions {
    @Override
    public void drive() {
        System.out.println("Driving in Comfort mode");
    }

    @Override
    public void shifts() {
        System.out.println("7-Speed Automatic");
    }

    @Override
    public void engineSet() {
        System.out.println("6.3L V12 Hybrid Engine Set");
    }
}
