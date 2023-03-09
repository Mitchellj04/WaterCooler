# README

# PHASE 5 CAPSTONE 

This is my phase 5 capstone project for Flatiron. Please read below to learn more about it and the functionality.

## Description

This projects front-end was built using React, React-Redux, and React-Route-Dom. As well as material ui for the styling aspects. 
The backend of the project was built with Ruby on Rails and a postgres database. 

## Requirements 

* React 
* React-Router-Dom 
* Material UI
* Ruby 
* Postgresql
* Redux Toolkit 
* React Redux 

## Instaltion 

Using the repository on Github fork and clone the repository and run this code in the directory. 

```
$ bundle install 
$ rails db:create 
$ npm install --prefix client 

```

### Setup 

In the directory terminal start by running the code below to start the database 

```
$ postgresql@14 start 

```
Then open up two other terminals in the same directory and run the following codes 
In the first terminal:
```
$ rails db:migrate db:seed
$ rails s

```
This will start the server for the backend. 
Next run this command in the other terminal:

``` 
$ npm start --prefix client 

```
This will start the server for the front end and open up a new tab in the browser


## About the App 

This app was create to create a better version of stackoverflow. 
Instead of coders just going looking for answers on stuck errors or bugs in their code. 
It was create to show an example of how a community could be created. 
At Flatiron we have a thing called the watercool where students can get together to work on problems together and bounce ideas off one another. 

### How it works 

* Sign up or Login 
* Create a post to resolve an issue or create a project to work on with others. 
* Help others resolve their problems or ask to collaborate with a project that interests you. 
* Learn from others mistakes 

This app was designed to bring coders together to create a community. 
On the home page you will see that there are projects individuals are working on you can collaborate with or problems that need answers. 
You can view others pages to see what they have been working on or scroll through different lanuages that you may know or want to learn. 

## Creator 

Justin Mitchell 
