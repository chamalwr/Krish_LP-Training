package dev.chamalwr.rentservice.controller;

import dev.chamalwr.rentmodel.model.rent.Rent;
import dev.chamalwr.rentservice.model.Response;
import dev.chamalwr.rentservice.model.SimpleResponse;
import dev.chamalwr.rentservice.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/services/rents")
public class RentController {

    private RentService rentService;

    @Autowired
    public RentController(RentService rentService) {
        this.rentService = rentService;
    }

    @PostMapping
    public Rent save(@RequestBody Rent rent) {
        return rentService.save(rent);
    }

    @GetMapping("/{id}")
    public Response getRent(@PathVariable int id, @RequestParam(required = false) String type) throws ExecutionException, InterruptedException {
        if(type == null){
            return new SimpleResponse(rentService.findById(id));
        }else{
            return rentService.findDetailResponse(id);
        }
    }

    @GetMapping
    public List<Rent> getAllRents() {
        return rentService.findAll();
    }
}
