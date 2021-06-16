package dev.chamalwr.rentservice.repository;

import dev.chamalwr.rentmodel.model.rent.Rent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RentRepository extends JpaRepository<Rent, Integer> {
}
