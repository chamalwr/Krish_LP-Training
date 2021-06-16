package dev.chamalwr.customerservice.service;

import dev.chamalwr.customerservice.repository.CustomerRepository;
import dev.chamalwr.rentmodel.model.customer.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    private CustomerRepository customerRepository;

    @Autowired
    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Customer findById(int id) {
        var optionalCustomer = customerRepository.findById(id);
        return optionalCustomer.orElseGet(Customer::new);
    }

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }
}
