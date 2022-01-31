package com.codecool.car.service.dao;

import com.codecool.car.model.Brand;

import java.util.Set;

public interface BrandDao {

    void add(Brand brand);
    Set<Brand> getAll();
    Brand findByName(String name);
    void deleteByName(String name);
}
