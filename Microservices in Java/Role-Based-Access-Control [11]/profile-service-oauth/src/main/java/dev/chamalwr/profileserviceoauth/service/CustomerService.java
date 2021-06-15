package dev.chamalwr.profileserviceoauth.service;

import dev.chamalwr.commons.model.Customer;

import java.util.List;

public interface CustomerService {

    Customer addCustomer(Customer customer);

    Customer getCustomer(Integer id);

    void deleteCustomer(Integer id);

    List<Customer> getAllCustomers();
}
