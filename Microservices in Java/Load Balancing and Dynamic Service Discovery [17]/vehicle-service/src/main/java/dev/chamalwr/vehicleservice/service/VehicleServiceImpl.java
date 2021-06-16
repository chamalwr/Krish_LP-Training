package dev.chamalwr.vehicleservice.service;

import dev.chamalwr.rentmodel.model.vehicle.Vehicle;
import dev.chamalwr.vehicleservice.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleServiceImpl implements VehicleService{

    private VehicleRepository vehicleRepository;

    @Autowired
    public VehicleServiceImpl(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    @Override
    public Vehicle save(Vehicle vehicle) {
       return vehicleRepository.save(vehicle);
    }

    @Override
    public Vehicle findById(int id) {
        var optionalVehicle = vehicleRepository.findById(id);
        return optionalVehicle.orElseGet(Vehicle::new);
    }

    @Override
    public List<Vehicle> findAll() {
        return vehicleRepository.findAll();
    }
}
