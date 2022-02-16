package com.codecool.car.controller;

import com.codecool.car.model.Brand;
import com.codecool.car.model.Car;
import com.codecool.car.service.BrandService;
import com.codecool.car.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/car")
@CrossOrigin(origins = "*")
public class CarController {

    private final CarService carService;
    private final BrandService brandService;

    @Autowired
    public CarController(CarService carService,BrandService brandService) {
        this.carService = carService;
        this.brandService = brandService;
    }

    @GetMapping()
    public List<Car> getAll() {
        return carService.getAll();
    }




//        brand.addCarToBrand(car);
//        return brand;
//
//        return carService.addCarToBrand(brand,car);
}