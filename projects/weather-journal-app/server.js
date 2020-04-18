// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
const server = app.listen(port, isServerActive);
function isServerActive() {
    console.log(`running on localhost: ${port}`);
};
// handles get calls from client
app.get('/getWeather', getWeatherInfo);
function getWeatherInfo(request, response) {
    console.log(projectData)
    response.send(projectData);
};
// handles post calls from client, stores the information from client to server
app.post('/saveWeather', saveWeatherInfo);
function saveWeatherInfo(request, response) {
    userEntry = {
        date: request.body.date,
        temp: request.body.temp,
        content: request.body.content
    };
    projectData.push(userEntry);
    response.send(projectData);
    console.log(projectData);
}