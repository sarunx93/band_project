# Band Picker Project
## General Info
Band Picker is a full-stack web application using MERN stack that allows users to create, update and delete their bands by sending HTTP requests to the server. The application also comes with authentication function which secures the application from unregistered users by verifying JSON web token that comes with login and register request. Both musician and band data are stored on MongoDB database. The application's fron-end is powered by React together with Redux Toolkit for state management whereas the back-end is made by Node and Express
## How to run the project
1.Navigate to the root directoy and run 
```
npm install react-scripts --save
```
so that react-scripts is recognised.

2.Then, head to the client folder
```
cd client
```
and install all client-related packages by running
```
npm install
```
3.Navigate back to the root folder and spin up the server with the command
```
npm start
```
## Introducing Pages
### Home Page
<img src='https://raw.githubusercontent.com/sarunx93/band_project/main/assets/images/home.png'/>
A stylish welcome page that will introduce you to the world of music, meeting new musician friends from around the globe.
