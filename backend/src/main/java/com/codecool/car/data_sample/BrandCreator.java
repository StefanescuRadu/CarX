package com.codecool.car.data_sample;

import com.codecool.car.model.Brand;
import com.codecool.car.service.dao.BrandMemory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BrandCreator {

    private final BrandMemory brandMemory;

    public void initialize() {
        Brand bmw = new Brand(1, "BMW", "Bayerische Motoren Werke AG, commonly known as Bavarian Motor Works, BMW or BMW AG, is a German automobile, motorcycle and engine manufacturing company founded in 1916. BMW is headquartered in Munich, Bavaria. It also owns and produces Mini cars, and is the parent company of Rolls-Royce Motor Cars.");
        Brand mercedes = new Brand(2, "MERCEDES", "Mercedes-Benz, commonly referred to as just Mercedes, is a German luxury automotive marque. Mercedes-Benz and subsidiary Mercedes-Benz AG – of Daimler AG – are headquartered in Stuttgart, Baden-Württemberg, Germany.Mercedes-Benz produces consumer luxury vehicles and commercial vehicles.Its first Mercedes-Benz-badged vehicles were produced in 1926. In 2018, Mercedes-Benz was the largest seller of premium vehicles in the world, having sold 2.31 million passenger cars.");
        brandMemory.add(bmw);
        brandMemory.add(mercedes);
    }

    @Autowired
    public BrandCreator(BrandMemory brandMemory) {
        this.brandMemory = brandMemory;
        initialize();
    }
}

