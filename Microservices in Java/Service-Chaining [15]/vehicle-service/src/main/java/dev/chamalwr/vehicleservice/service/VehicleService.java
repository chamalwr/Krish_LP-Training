package dev.chamalwr.vehicleservice.service;

import dev.chamalwr.rentmodel.model.vehicle.Vehicle;

import java.util.List;

public interface VehicleService {
    Vehicle save(Vehicle vehicle);

    Vehicle findById(int id);

    List<Vehicle> findAll();
}
