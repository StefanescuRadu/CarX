package com.codecool.car.service;

import com.codecool.car.model.Brand;
import com.codecool.car.model.Car;
import com.codecool.car.repository.BrandRepository;

import com.codecool.car.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class BrandService {

    private final BrandRepository brandRepository;
    private final CarRepository carRepository;

    @Autowired
    public BrandService(BrandRepository brandRepository,CarRepository carRepository) {
        this.brandRepository = brandRepository;
        this.carRepository = carRepository;
    }

    public List<Brand> getAll(){
        return brandRepository.findAll();
    }

    public Brand addBrand(Brand brand){
        return brandRepository.save(brand);
    }

    public Brand findBrandByName(String name){
        return brandRepository.findByName(name);
    }

    @Transactional
    public void addCarToBrand(String name,Car car){
        Brand brand = findBrandByName(name);
        Car carToAdd = carRepository.save(car);
        carToAdd.setBrand(brand);
        brand.getCars().add(carToAdd);

    }

//
//    public Brand getByName(String name){
//        return brandRepository.;
//    }
}
