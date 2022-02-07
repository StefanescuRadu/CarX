package com.codecool.car.service;

import com.codecool.car.model.Car;
import com.codecool.car.model.User;
import com.codecool.car.repository.CarRepository;
import com.codecool.car.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final CarRepository carRepository;

    @Autowired
    public UserService(UserRepository userRepository,CarRepository carRepository) {
        this.userRepository = userRepository;
        this.carRepository = carRepository;
    }

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public User addUser(User user){
        return userRepository.save(user);
    }

    @Transactional
    public void addCarToFavourites(String user,Long car){
        User userToAdd = userRepository.findByName(user);
        Car carToAdd = carRepository.findById(car).orElse(null);
        userToAdd.getFavourites().add(carToAdd);
    }
    public Set<Car> getUsersFavourites(User user){
        return user.getFavourites();
    }

    public void deleteUser(Long id){
         userRepository.deleteById(id);
    }
}
