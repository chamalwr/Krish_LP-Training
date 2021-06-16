package dev.chamalwr.profileservice.service;

import dev.chamalwr.commons.model.Customer;
import dev.chamalwr.profileservice.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private ProfileRepository profileRepository;

    @Override
    public Customer addCustomer(Customer customer) {
        return profileRepository.save(customer);
    }

    @Override
    public Customer getCustomer(Integer id) {
        return profileRepository.findById(id).get();
    }

    @Override
    public void deleteCustomer(Integer id) {
        profileRepository.delete(getCustomer(id));
    }
}
