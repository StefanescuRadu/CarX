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
//			userService.saveUser(new User(null,"admin","admin@admin.com","admin",new HashSet<>(),new ArrayList<>()));
//			userService.addRoleToUser("admin@admin.com","ROLE_ADMIN");
//
//			brandService.addBrand(new Brand(null, "Ford", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis. Morbi ac dictum eros, a porttitor leo.","https://images.unsplash.com/photo-1560801877-7bda6dd63e51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGZvcmR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","https://www.ford.ro/content/dam/guxeu/global-shared/header/ford-go-further.png.renditions.extra-large.png","https://www.gpas-cache.ford.com/guid/64d902bb-dc21-3026-b0aa-69f779d6aab6.png", new HashSet<>()));
//			brandService.addBrand(new Brand(null, "Porsche", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis. Morbi ac dictum eros, a porttitor leo.","https://images.unsplash.com/photo-1611651186486-415f04eb78e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnNjaGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","https://cdn.ui.porsche.com/porsche-design-system/marque/porsche-marque-trademark.medium.min.5c6af9aa7946fea34f60c8f8c95d0188@1x.webp","https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-718/normal/db4be0ec-f8f4-11eb-80db-005056bbdc38;sP;twebp/porsche-normal.webp", new HashSet<>()));
//			brandService.addBrand(new Brand(null, "Audi", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis. Morbi ac dictum eros, a porttitor.","https://images.unsplash.com/photo-1627612087981-ca1d6dec6eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF1ZGl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1610475426528-f5565ecca5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","https://cdn.audi.ro/media/TextImage_ImageEnlarge_Component/9156-paragraphs-804458-504638-804465-image/dh-276-d8ec43/52ef0382/1637767591/4.jpg", new HashSet<>()));
//			brandService.addBrand(new Brand(null, "Ford", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum porttitor magna rutrum mollis. Morbi ac dictum eros, a porttitor leo.","https://images.unsplash.com/photo-1611016186353-9af58c69a533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","https://www.ford.ro/content/dam/guxeu/global-shared/header/ford-go-further.png.renditions.extra-large.png","https://www.gpas-cache.ford.com/guid/64d902bb-dc21-3026-b0aa-69f779d6aab6.png", new HashSet<>()));

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




		};
	}

}
