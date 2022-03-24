package com.codecool.car;

import com.codecool.car.model.Brand;
import com.codecool.car.model.Car;
import com.codecool.car.model.Role;
import com.codecool.car.model.User;
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
//			userService.saveRole(new Role(null,"ROLE_USER"));
//			userService.saveRole(new Role(null,"ROLE_ADMIN"));
//
//			brandService.addBrand(new Brand(null, "Bmw", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis. Morbi ac dictum eros, a porttitor leo.", new HashSet<>()));
//			brandService.addBrand(new Brand(null, "Audi", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis. Morbi ac dictum eros, a porttitor leo.", new HashSet<>()));
//			brandService.addBrand(new Brand(null, "Mercedes", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis. Morbi ac dictum eros, a porttitor leo.", new HashSet<>()));
//			brandService.addBrand(new Brand(null, "Tesla", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis. Morbi ac dictum eros, a porttitor leo.", new HashSet<>()));
//
//			Car series_5 = new Car(null,"Series 5", CarType.COUPE,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis.",2,5,5, EngineType.DIESEL,25000,"black",null);
//			Car x5 = new Car(null,"X5", CarType.SUV,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis.",2,5,5, EngineType.DIESEL,25000,"black",null);
//			Car series_1 = new Car(null,"Series 1", CarType.HATCHBACK,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis.",2,5,5, EngineType.DIESEL,25000,"black",null);
//			Car series_3 = new Car(null,"Series 3", CarType.SEDAN,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis.",2,5,5, EngineType.DIESEL,25000,"black",null);
//			brandService.addCarToBrand("Bmw",series_1);
//			brandService.addCarToBrand("Bmw",series_3);
//			brandService.addCarToBrand("Bmw",series_5);
//			brandService.addCarToBrand("Bmw",x5);
//
//			Car a5 = new Car(null,"A5", CarType.COUPE,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis.",2,5,5, EngineType.DIESEL,25000,"black",null);
//			Car q5 = new Car(null,"Q5", CarType.SUV,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis.",2,5,5, EngineType.DIESEL,25000,"black",null);
//			Car q1 = new Car(null,"Q1", CarType.HATCHBACK,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis.",2,5,5, EngineType.DIESEL,25000,"black",null);
//			Car a4 = new Car(null,"A4", CarType.SEDAN,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis.",2,5,5, EngineType.DIESEL,25000,"black",null);
//			brandService.addCarToBrand("Audi",a4);
//			brandService.addCarToBrand("Audi",a5);
//			brandService.addCarToBrand("Audi",q1);
//			brandService.addCarToBrand("Audi",q5);
//
//			Car glc = new Car(null,"GLC Class", CarType.SUV,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis.",2,5,5, EngineType.DIESEL,25000,"black",null);
//			Car cla = new Car(null,"CLA Class", CarType.SEDAN,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis.",2,5,5, EngineType.DIESEL,25000,"black",null);
//			Car gla = new Car(null,"GLA Class", CarType.HATCHBACK,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis.",2,5,5, EngineType.DIESEL,25000,"black",null);
//			Car s = new Car(null,"S Class", CarType.COUPE,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis.",2,5,5, EngineType.DIESEL,25000,"black",null);
//			brandService.addCarToBrand("Mercedes",glc);
//			brandService.addCarToBrand("Mercedes",cla);
//			brandService.addCarToBrand("Mercedes",gla);
//			brandService.addCarToBrand("Mercedes",s);
//
//			userService.saveUser(new User(null,"admin","admin@admin.com","admin",new HashSet<>(),new ArrayList<>()));
//			userService.addRoleToUser("admin@admin.com","ROLE_ADMIN");



		};
	}

}
