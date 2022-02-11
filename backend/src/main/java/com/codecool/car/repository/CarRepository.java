package com.codecool.car.repository;

import com.codecool.car.model.Brand;
import com.codecool.car.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends JpaRepository<Car,Long> {
    Car findCarByName(String name);

}
