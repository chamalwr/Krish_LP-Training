package dev.chamalwr.profileserviceoauth.repository;

import dev.chamalwr.commons.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends JpaRepository<Customer, Integer> {
}
