package dev.chamalwr.authserverprod.repository;

import dev.chamalwr.authserverprod.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDetailRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUserName(String s);
}
