package com.codecool.car.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class Brand {
    private int id;
    private String name;
    private String description;
}
