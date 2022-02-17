package com.codecool.car;

import com.codecool.car.model.Brand;
import com.codecool.car.model.Car;
import com.codecool.car.model.Role;
import com.codecool.car.model.enums.CarType;
import com.codecool.car.model.enums.EngineType;
import com.codecool.car.service.BrandService;
import com.codecool.car.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;


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
	CommandLineRunner run(UserService userService,BrandService brandService){
		return  args -> {
			userService.saveRole(new Role(null,"ROLE_USER"));
			userService.saveRole(new Role(null,"ROLE_ADMIN"));
			brandService.addBrand(new Brand(null, "BMW", "Lorem ipsum", new HashSet<>()));
			brandService.addBrand(new Brand(null, "Audi", "Lorem ipsum", new HashSet<>()));
			brandService.addBrand(new Brand(null, "Mercedes", "Lorem ipsum", new HashSet<>()));
			brandService.addBrand(new Brand(null, "Tesla", "Lorem ipsum", new HashSet<>()));
			Car car = new Car(null,"test", CarType.COUPE,"lorem ipsum",2,5,5, EngineType.DIESEL,25000,"black",null);
			brandService.addCarToBrand("BMW",car);
//


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