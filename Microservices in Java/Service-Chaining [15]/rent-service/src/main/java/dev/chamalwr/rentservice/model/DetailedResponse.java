package dev.chamalwr.rentservice.model;

import dev.chamalwr.rentmodel.model.customer.Customer;
import dev.chamalwr.rentmodel.model.rent.Rent;
import dev.chamalwr.rentmodel.model.vehicle.Vehicle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DetailedResponse implements Response{
    private Rent rent;
    private Customer customer;
    private Vehicle vehicle;
}
