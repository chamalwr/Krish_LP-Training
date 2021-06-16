package dev.chamalwr.profileserviceoauth.service;

import dev.chamalwr.commons.model.Customer;

public interface CustomerService {

    Customer addCustomer(Customer customer);

    Customer getCustomer(Integer id);

    void deleteCustomer(Integer id);

}
