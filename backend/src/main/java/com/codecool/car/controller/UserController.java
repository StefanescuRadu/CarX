package com.codecool.car.controller;

import com.codecool.car.model.Brand;
import com.codecool.car.model.Car;
import com.codecool.car.model.User;
import com.codecool.car.service.BrandService;
import com.codecool.car.service.CarService;
import com.codecool.car.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public List<User> getAll() {
        return userService.getAll();
    }

    @PostMapping()
    public User newUser(@RequestBody User user){
        return userService.addUser(user);
    }
}