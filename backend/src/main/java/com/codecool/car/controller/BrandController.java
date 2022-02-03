package com.codecool.car.controller;

import com.codecool.car.model.Brand;
import com.codecool.car.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.plaf.basic.BasicRadioButtonMenuItemUI;
import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class BrandController {

    private final BrandService brandService;

    @Autowired
    public BrandController(BrandService brandService) {
        this.brandService = brandService;
    }

    @GetMapping()
    public List<Brand> getAll(){
        return brandService.getAll();
    }

    @PostMapping()
    public Brand newBrand(@RequestBody Brand brand){
        return brandService.addBrand(brand);
    }

//    @GetMapping("/{brand}")
//    public Brand addBrand(@PathVariable String brand){
//        return  brandService.getByName(brand);
//    }
}
