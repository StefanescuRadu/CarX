package com.codecool.car.service;

import com.codecool.car.model.Brand;
import com.codecool.car.repository.BrandRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService {

    private final BrandRepository brandRepository;

    @Autowired
    public BrandService(BrandRepository brandRepository) {
        this.brandRepository = brandRepository;
    }

    public List<Brand> getAll(){
        return brandRepository.findAll();
    }

    public Brand addBrand(Brand brand){
        return brandRepository.save(brand);
    }
//
//    public Brand getByName(String name){
//        return brandRepository.;
//    }
}
