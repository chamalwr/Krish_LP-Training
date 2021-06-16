package dev.chamalwr.rentservice.service;

import dev.chamalwr.rentmodel.model.rent.Rent;
import dev.chamalwr.rentservice.model.DetailedResponse;

import java.util.List;

public interface RentService {
    Rent save(Rent customer);

    Rent findById(int id);

    List<Rent> findAll();

    DetailedResponse findDetailResponse(int id);
}
