package com.codecool.car.model;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    private String name;
    private String description;
    @OneToMany
    private Set<Car> cars;

//    public void addCarToBrand(Car car){
//        //As said Hibernate will ignore it when persist this relationship.
//        //Add it mainly for the consistency of this relationship for both side in the Java instance
//        this.cars.add(car);
////
////        car.setBrand(this);
//    }

}
