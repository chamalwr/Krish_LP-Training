package dev.chamalwr.customerservice.service;

import dev.chamalwr.rentmodel.model.customer.Customer;

import java.util.List;

public interface CustomerService {
    Customer save(Customer customer);

    Customer findById(int id);

    List<Customer> findAll();
}
