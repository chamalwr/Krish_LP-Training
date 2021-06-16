package dev.chamalwr.rentservice.service;

import com.netflix.hystrix.HystrixCommand;
import dev.chamalwr.rentmodel.model.customer.Customer;
import dev.chamalwr.rentmodel.model.rent.Rent;
import dev.chamalwr.rentmodel.model.vehicle.Vehicle;
import dev.chamalwr.rentservice.hystrix.CommonHystrixCommand;
import dev.chamalwr.rentservice.hystrix.VehicleCommand;
import dev.chamalwr.rentservice.model.DetailedResponse;
import dev.chamalwr.rentservice.repository.RentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

@Service
public class RentServiceImpl implements RentService{

    private RentRepository rentRepository;
    private RestTemplate restTemplate;
    private HystrixCommand.Setter setter;

    @Autowired
    public RentServiceImpl(RentRepository rentRepository, RestTemplate restTemplate,
                           HystrixCommand.Setter setter) {
        this.rentRepository = rentRepository;
        this.restTemplate = restTemplate;
        this.setter = setter;
    }

    @Override
    public Rent save(Rent customer) {
        return rentRepository.save(customer);
    }

    @Override
    public Rent findById(int id) {
       var rentOptional = rentRepository.findById(id);
        return rentOptional.orElseGet(Rent::new);
    }

    @Override
    public List<Rent> findAll() {
        return rentRepository.findAll();
    }

    @Override
    public DetailedResponse findDetailResponse(int id) throws ExecutionException, InterruptedException{
        Rent rent=findById(id);
        Customer customer= getCustomer(rent.getCustomerId());
        Vehicle vehicle= getVehicle(rent.getVehicleId());
        return new DetailedResponse(rent,customer,vehicle);
    }

    private Customer getCustomer(int customerId)throws ExecutionException, InterruptedException {

        CommonHystrixCommand<Customer> customerCommonHystrixCommand =
                new CommonHystrixCommand<Customer>(setter,()-> {
            return restTemplate.getForObject("http://customer-service/services/customers/" + customerId,Customer.class);
            },()->{
                return new Customer();
        });

        Future<Customer> customerFuture=customerCommonHystrixCommand.queue();
        return customerFuture.get();
    }

    private Vehicle getVehicle(int vehicleId){
        VehicleCommand vehicleCommand= new VehicleCommand(restTemplate,vehicleId);
        return vehicleCommand.execute();
    }
}
