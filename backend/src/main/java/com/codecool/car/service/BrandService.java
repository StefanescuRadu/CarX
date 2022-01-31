package com.codecool.car.service;

import com.codecool.car.model.Brand;
import com.codecool.car.service.dao.BrandDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class BrandService {

    private final BrandDao brandDao;

    @Autowired
    public BrandService(BrandDao brandDao) {
        this.brandDao = brandDao;
    }

    public Set<Brand> getAll(){
        return brandDao.getAll();
    }

    public Brand getByName(String name){
        return brandDao.findByName(name);
    }
}
