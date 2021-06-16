package dev.chamalwr.profileserviceoauth.contoller;

import dev.chamalwr.commons.model.Customer;
import dev.chamalwr.profileserviceoauth.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/services")
public class ProfileController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/")
    public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer){
        var savedCustomer = customerService.addCustomer(customer);
        return ResponseEntity.ok().body(savedCustomer);
    }

    @GetMapping("{id}")
    public ResponseEntity<Customer> getCustomer(@PathVariable Integer id){
        var customer = customerService.getCustomer(id);
        if (customer == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok().body(customer);
    }
}
