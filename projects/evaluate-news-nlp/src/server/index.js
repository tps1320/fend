const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const app = express()
var aylien = require('aylien_textapi');
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//called when user input is text
app.post('/analyze-text', function (req, res){
  textapi.sentiment({
      text: req.body.userInput,
      mode: 'tweet',
    }, function(error, response) {
        if (error == null) {
          console.log(response);
          res.send(response);
        } else {
          console.log(error);
          res.send(error);
        }
    });
});
// called when user input is url
app.post('/analyze-url', function (req, res){
  textapi.sentiment({
      url: req.body.userInput,
      mode: 'document',
    }, function(error, response) {
        if (error == null) {
          console.log(response);
          res.send(response);
        } else {
          console.log(error);
          res.send(error);
        }
    });
});