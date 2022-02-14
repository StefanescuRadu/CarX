package com.codecool.car;

import com.codecool.car.model.Role;
import com.codecool.car.model.User;
import com.codecool.car.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class CarApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarApplication.class, args);
	}
	@Bean
	PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner run(UserService userService){
		return  args -> {
			userService.saveRole(new Role(null,"ROLE_USER"));
			userService.saveRole(new Role(null,"ROLE_ADMIN"));

//
//			userService.saveUser(new User(null,"John Travolta","John","1234",new ArrayList<>()));
//			userService.saveUser(new User(null,"Will Smith","Will","1234",new ArrayList<>()));
//			userService.saveUser(new User(null,"Jim Carry","Jim","1234",new ArrayList<>()));
//			userService.saveUser(new User(null,"Arnold Schwarzenegger","Arnold","1234",new ArrayList<>()));
//
//			userService.addRoleToUser("John","ROLE_USER");
//			userService.addRoleToUser("Will","ROLE_MANAGER");
//			userService.addRoleToUser("Jim","ROLE_ADMIN");
//			userService.addRoleToUser("Arnold","ROLE_SUPER_ADMIN");
//			userService.addRoleToUser("Arnold","ROLE_ADMIN");
//			userService.addRoleToUser("Arnold","ROLE_USER");
		};
	}

}
