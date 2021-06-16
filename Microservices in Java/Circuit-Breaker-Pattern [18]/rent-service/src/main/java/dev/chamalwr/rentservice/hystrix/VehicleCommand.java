package dev.chamalwr.rentservice.hystrix;

import com.netflix.hystrix.HystrixCommand;
import com.netflix.hystrix.HystrixCommandGroupKey;
import dev.chamalwr.rentmodel.model.vehicle.Vehicle;
import org.springframework.web.client.RestTemplate;

public class VehicleCommand extends HystrixCommand<Vehicle> {

    private RestTemplate restTemplate;
    private int vehicleId;


    public VehicleCommand(RestTemplate restTemplate, int vehicleId){
        super(HystrixCommandGroupKey.Factory.asKey("default"));
        this.restTemplate = restTemplate;
        this.vehicleId = vehicleId;
    }

    @Override
    protected Vehicle run() throws Exception {
        return restTemplate.getForObject("http://vehicle-service/services/vehicles/" + vehicleId,Vehicle.class);
    }

    @Override
    protected Vehicle getFallback() {
        System.out.println("Hit on Fallback!");
        return new Vehicle();
    }
}
