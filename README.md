# CarX

This codebase was created to demonstrate a fully fledged full-stack application built with Spring boot + React including CRUD operations, authentication, routing, pagination, and more.

# Backend

The code is organized as this:

1. `controllers` is the presentation layer 
2. `service` is the business model including  services
3. `model` is the model layer 
4. `repository`  contains persistance layer
5. `security` and `filter` for security layer

## Security

Integration with Spring Security and add other filter for jwt token process.
.

## Database

It uses a  postgresql database (for easy local test without losing test data after every restart), can be changed easily in the `application.properties` for any other database.

## Getting started

You'll need Java 8 installed.

    cd backend
    mvn spring-boot:run

To test that it works, open a browser tab at http://localhost:8080 .  
Alternatively, you can run

    curl http://localhost:8080



# Frontend 

## Getting started

    cd frontend
    npm install
    
This will install all the dependencies found in package.json.
Run `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

### Functionality overview

This application is an example of a car configurator.It uses a custom API for all requests.


**General functionality:**

- Authenticate users via JWT (login/signup pages + logout button on settings page)
- Read for users 
- Create for admin
- GET and display paginated lists of articles
- Favorite cars


**The general page breakdown looks like this:**

- Home page (URL: /#/ )
    - Short description
- Sign in/Sign up pages (URL: /#/login, /#/register )
    - All new users get `ROLE_USER`
    - There is an admin user created when you start spring boot app 
    - Admin: email: admin@admin.com , pass: admin
    - Uses JWT (store the token in localStorage)
    - Authentication can be easily switched to session/cookie based
- All brands(/brands/)
- Brand page (URL: /brands/:brand )
- Car page(URL: /brands/:brand/:model):
   - If you are a normal user you can add car to favourite
- Profile page (URL: /users/:name )
    - Shows name,email,jwt token for all users
    - As a normal user you will see a list of favourite items
    - As an admin you will have 2 buttons: Add brand/ Add car
 -Add brand page: (URL: /addBrand)
 -Add car page: (URL: /addCar)
