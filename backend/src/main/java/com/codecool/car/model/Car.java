package com.codecool.car.model;

import com.codecool.car.model.enums.CarType;
import com.codecool.car.model.enums.EngineType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private CarType carType;
    private String description;
    private int engine;
    private int seats;
    private int length;
    private EngineType engineType;
    private int price;
    private String color;
    @ElementCollection
    private List<String> interior;
    @ElementCollection
    private List<String> exterior;
    @JsonIgnore
    @ManyToOne
    private Brand brand;
}
