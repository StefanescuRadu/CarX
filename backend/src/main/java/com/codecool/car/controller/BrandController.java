package com.codecool.car.controller;

import com.codecool.car.model.Brand;
import com.codecool.car.model.Car;
import com.codecool.car.service.BrandService;
import com.codecool.car.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class BrandController {

    private final BrandService brandService;
    private final CarService carService;


    @Autowired
    public BrandController(BrandService brandService,CarService carService) {
        this.brandService = brandService;
        this.carService = carService;
    }

    @GetMapping()
    public List<Brand> getAll(){
        return brandService.getAll();
    }

    @PostMapping()
    public Brand newBrand(@RequestBody Brand brand){
        return brandService.addBrand(brand);
    }

    @PostMapping("/{name}")
    public void newCar(@RequestBody Car car, @PathVariable String name) {
        brandService.addCarToBrand(name,car);
    }

    @GetMapping("/{name}")
    public Brand getBrandByName(@PathVariable String name){
        return brandService.findBrandByName(name);
    }

    @GetMapping("/{name}/{car}")
    public Car getCarByBrandAndName(@PathVariable String name,@PathVariable  String car){
        Brand brand = brandService.findBrandByName(name);
        System.out.println(car);
        return carService.getCarByBrandAndName(brand,car);
    }
}
