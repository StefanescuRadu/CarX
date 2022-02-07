package com.codecool.car.repository;

import com.codecool.car.model.Car;
import com.codecool.car.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository< User,Long> {
        User findByName(String name);
}
