package com.codecool.car.service.dao;

import com.codecool.car.model.Brand;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public class BrandMemory implements BrandDao{
    private final Set<Brand> brands;

    public BrandMemory(Set<Brand> brands) {
        this.brands = brands;
    }

    @Override
    public void add(Brand brand) {
        brands.add(brand);
    }

    @Override
    public Set<Brand> getAll() {
        return brands;
    }

    @Override
    public Brand findByName(String name) {
        for (Brand brand : brands) {
            if(brand.getName().equals(name)){
                return brand;
            }

        }
        return null;
    }

    @Override
    public void deleteByName(String name) {

    }
}
