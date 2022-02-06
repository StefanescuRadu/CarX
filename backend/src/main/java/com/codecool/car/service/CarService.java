package com.codecool.car.service;

import com.codecool.car.model.Brand;
import com.codecool.car.model.Car;
import com.codecool.car.repository.BrandRepository;

import com.codecool.car.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class CarService {

    private final CarRepository carRepository;


    @Autowired
    public CarService(CarRepository carRepository,BrandRepository brandRepository) {
        this.carRepository = carRepository;

    }

    public List<Car> getAll() {
        return carRepository.findAll();
    }

    public Car addCar(Car car) {
        return carRepository.save(car);
    }

    public Car getCarByBrandAndName(Brand brand,String name){
        return carRepository.findCarByName(name);
    }

}