package com.codecool.car.controller;

import com.codecool.car.model.Brand;
import com.codecool.car.model.Car;
import com.codecool.car.model.JsonResponse;
import com.codecool.car.model.User;
import com.codecool.car.service.BrandService;
import com.codecool.car.service.CarService;
import com.codecool.car.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public JsonResponse newUser(@RequestBody User user){
        List<User> users = getAll();
        for (User user1 : users) {
            if(user1.getEmail().equals(user.getEmail())){
                return new JsonResponse("BAD","Email address already in use!");
            }
        }
         userService.addUser(user);
        return new JsonResponse("OK","User added!");
    }

    @PostMapping("/{user}/{car}")
    public void addCarToFavourite(@PathVariable String user,@PathVariable Long car){
         userService.addCarToFavourites(user,car);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }
}