package com.codecool.car.service;

import com.codecool.car.model.Car;
import com.codecool.car.model.Role;
import com.codecool.car.model.User;
import com.codecool.car.repository.CarRepository;
import com.codecool.car.repository.RoleRepository;
import com.codecool.car.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@RequiredArgsConstructor
@Slf4j
@Service
@Transactional
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final CarRepository carRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if(user == null){
            log.error("User not found in the database");
            throw new UsernameNotFoundException("User not found in the database!");
        } else{
            log.info("User found in the database: {}",email);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role ->{
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        });
        return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),authorities);
    }

    public User saveUser(User user) {
        log.info("Saving new user {} to database ",user.getName());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Role saveRole(Role role) {
        log.info("Saving new role {} to database ",role.getName());
        return roleRepository.save(role);
    }

    public boolean checkLogin(User dataUser,String password,String email){

        return passwordEncoder.matches(password,dataUser.getPassword())
                && dataUser.getEmail().equals(email);
    }

    public void addRoleToUser(String email, String roleName) {
        log.info("Saving new role {} to user {}",roleName,email);
        User user = userRepository.findByEmail(email);
        Role role = roleRepository.findByName(roleName);
        user.getRoles().add(role);
    }

    public User getUser(String email) {
        log.info("Fetching user {}",email);
        return userRepository.findByEmail(email);
    }


    public List<User> getUsers() {
        log.info("Fetching all users");
        return userRepository.findAll();
    }

    public User findByEmail(String email){
        return userRepository.findByEmail(email);
    }

    @Transactional
    public void addCarToFavourites(String email,Long car){
        User userToAdd = userRepository.findByEmail(email);
        Car carToAdd = carRepository.findById(car).orElse(null);
        userToAdd.getFavourites().add(carToAdd);
    }
    public Set<Car> getUsersFavourites(User user){
        return user.getFavourites();
    }


}