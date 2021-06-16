package dev.chamalwr.rentservice.service;

import dev.chamalwr.rentmodel.model.customer.Customer;
import dev.chamalwr.rentmodel.model.rent.Rent;
import dev.chamalwr.rentmodel.model.vehicle.Vehicle;
import dev.chamalwr.rentservice.model.DetailedResponse;
import dev.chamalwr.rentservice.repository.RentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class RentServiceImpl implements RentService{

    private RentRepository rentRepository;
    private RestTemplate restTemplate;

    @Autowired
    public RentServiceImpl(RentRepository rentRepository, RestTemplate restTemplate) {
        this.rentRepository = rentRepository;
        this.restTemplate = restTemplate;
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
    public DetailedResponse findDetailResponse(int id) {
        Rent rent=findById(id);
        Customer customer= getCustomer(rent.getCustomerId());
        Vehicle vehicle= getVehicle(rent.getVehicleId());
        return new DetailedResponse(rent,customer,vehicle);
    }

    private Customer getCustomer(int customerId){
        Customer customer = restTemplate.getForObject("http://localhost:8080/services/customers/"+customerId,Customer.class);
        return customer;
    }

    private Vehicle getVehicle(int vehicleId){
        return restTemplate.getForObject("http://localhost:8081/services/vehicles/"+vehicleId,Vehicle.class);
    }
}
