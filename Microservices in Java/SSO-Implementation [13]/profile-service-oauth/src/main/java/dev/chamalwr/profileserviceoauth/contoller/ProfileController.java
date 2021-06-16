package dev.chamalwr.profileserviceoauth.contoller;

import dev.chamalwr.commons.model.Customer;
import dev.chamalwr.profileserviceoauth.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
public class ProfileController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/profile")
    @PreAuthorize("hasAuthority('create_profile')")
    public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer){
        var savedCustomer = customerService.addCustomer(customer);
        return ResponseEntity.ok().body(savedCustomer);
    }

    @GetMapping("/profile/{id}")
    @PreAuthorize("hasAuthority('read_profile')")
    public ResponseEntity<Customer> getCustomer(@PathVariable Integer id){
        var customer = customerService.getCustomer(id);
        if (customer == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok().body(customer);
    }

    @GetMapping("/profile")
    @PreAuthorize("hasRole('ROLE_admin')")
    public ResponseEntity<List<Customer>> getAllCustomers(){
        var profiles = customerService.getAllCustomers();
        if (profiles.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok().body(profiles);
    }

    @DeleteMapping("/profile/{id}")
    @PreAuthorize("hasAuthority('delete_profile')")
    public ResponseEntity deleteCustomer(@PathVariable Integer id){
        customerService.deleteCustomer(id);
        return ResponseEntity.ok().build();
    }
}
