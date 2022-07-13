# Band Picker Project
https://bandpicker.herokuapp.com/
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
## Pages
### Home Page
<img src='https://raw.githubusercontent.com/sarunx93/band_project/main/assets/images/home.png'/>
A stylish welcome page that will introduce you to the world of music, meeting new musician friends from around the globe.</br>

### All Musicians Page
<img src='https://raw.githubusercontent.com/sarunx93/band_project/main/assets/images/all_musicians.png'/>
The page that displays data of 100 musicians with colour tabs that categorize them according to the instruments they play. Data can also be filtered by filter buttons at the top of the page. Let's say you want to see only the guitarists, just simply click on the guitar filter button and the data will be displayed. It also comes with pagination. The way it works is that the whole data has been paginated by the server so that the front-end can display data and easily perform pagination function.

### Dashboard
Dahsboard is where most of the HTTP requests are performed and it is also a protected router where a user needs to login before accessing it. This is where you can create, delete and update your band and also update your profile details. This page consists of 3 nested pages.

### Profile
<img src='https://raw.githubusercontent.com/sarunx93/band_project/main/assets/images/profile.png'/>
This page basically takes your input and sends patch request to the server to update details of an existing user.

### Create a Band
<img src='https://github.com/sarunx93/band_project/blob/main/assets/images/create_band.png'/>
There two main sections on this page, create-band section and musician section. In the create-band section, you can give your band a cool name, a genre, and optionally, sub-genre. The lower section is where you pick up your bandmates by clickling 'add' button on a musican. Both are mandatory in order to create a band.

### See Bands
<img src='https://github.com/sarunx93/band_project/blob/main/assets/images/see_bands.png'/>
This is where you can see all the bands that a user currently has. You can also search by name, filter by genre or sort by name in ascending or descending order.
Pagination also applies if there are more than 10 bands.

### Login/Register
<img src='https://github.com/sarunx93/band_project/blob/main/assets/images/login.png'/>
This is where users will come to if they want to register or login in order to access the dashboard. Users will be assigned JSON web token after they logged in so that they can be verified by the server.
