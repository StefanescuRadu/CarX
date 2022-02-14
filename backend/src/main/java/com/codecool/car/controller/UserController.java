package com.codecool.car.controller;


import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.codecool.car.model.JsonResponse;
import com.codecool.car.model.Role;
import com.codecool.car.model.User;

import com.codecool.car.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/users")
@Slf4j
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok().body(userService.getUsers());
    }

    @GetMapping("/user/{email}")
    public User getUser(@PathVariable  String email){
        return userService.getUser(email);
    }

    @PostMapping("/register")
    public JsonResponse newUser(@RequestBody User user){
        List<User> users = userService.getUsers();
        for (User user1 : users) {
            if(user1.getEmail().equals(user.getEmail())){
                return new JsonResponse("BAD","Email address already in use!");
            }
        }
         userService.saveUser(user);
         userService.addRoleToUser(user.getEmail(),"ROLE_USER");
        return new JsonResponse("OK","User added!");
    }

    @PostMapping("/login")
    public JsonResponse logUser(@RequestBody User user){
        List<User> users = userService.getUsers();
        for (User user1 : users) {
            if(userService.checkLogin(user1,user)){
                return new JsonResponse("OK","Log in succesfull!");
            }
        }
        return new JsonResponse("BAD","Wrong email or password!");
    }

    @PostMapping("/{user}/{car}")
    public ResponseEntity<?> addCarToFavourite(@PathVariable String user, @PathVariable Long car){
         userService.addCarToFavourites(user,car);
         return ResponseEntity.ok().build();
    }


//    @PostMapping("/register")
//    public ResponseEntity<?> saveUser(@RequestBody User user) {
//        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/register").toUriString());
//        List<User> users = userService.getUsers();
//        for (User user1 : users) {
//            if(user1.getEmail().equals(user.getEmail())){
//                System.out.println("User already here!");
//                return ResponseEntity.badRequest().body(
//                        "Message : Address already in use");
//            }
//        }
//        return ResponseEntity.created(uri).body(userService.saveUser(user));
//    }

    @PostMapping("/role/save")
    public ResponseEntity<Role> saveRole(@RequestBody Role role) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/role/save").toUriString());
        return ResponseEntity.created(uri).body(userService.saveRole(role));
    }

    @PostMapping("/role/addToUser")
    public ResponseEntity<?> addRoleToUser(@RequestBody RoleToUserForm form) {
        userService.addRoleToUser(form.getUsername(), form.getRoleName());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/token/refresh")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            try {
                String refresh_token = authorizationHeader.substring("Bearer ".length());
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(refresh_token);
                String username = decodedJWT.getSubject();
                User user = userService.getUser(username);
                String accesToken = JWT.create()
                        .withSubject(user.getEmail())
                        .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
                        .withIssuer(request.getRequestURL().toString())
                        .withClaim("roles", user.getRoles().stream().map(Role::getName).collect(Collectors.toList()))
                        .sign(algorithm);

                Map<String, String> tokens = new HashMap<>();
                tokens.put("acces-token", accesToken);
                tokens.put("refresh-token", refresh_token);
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), tokens);

            } catch (Exception exception) {
                log.error("Error logging in: {}", exception.getMessage());
                response.setHeader("error", exception.getMessage());
                response.setStatus(FORBIDDEN.value());
//                    response.sendError(FORBIDDEN.value());
                Map<String, String> error = new HashMap<>();
                error.put("error_message", exception.getMessage());
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), error);
            }
        } else {
            throw new RuntimeException("Refresh token is missing");
        }


    }
}
@Data
class RoleToUserForm {
    private String username;
    private String roleName;
}

