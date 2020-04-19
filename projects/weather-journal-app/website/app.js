/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//https://home.openweathermap.org/api_keys
const apiKey = 'e153d2be7ed32dbc1c60c6dd2a62e573';
const openweathermapBaseUrl = 'api.openweathermap.org/data/2.5/weather?zip=';

document.getElementById('generate').addEventListener('click', generate);

function generate(e) {
    const zipCode = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;
    callWeatherApiInfo(zipCode).then(function(apiData) {
        console.log(apiData);
        return sendWeatherInfo('/saveWeather', {temp: apiData.main.temp, date:newDate, content: content});
    }).then(function(){
        displayWeatherInfo('/getWeather');
    });   
}

const callWeatherApiInfo = async(zip) =>{
    const url = `http://${openweathermapBaseUrl}${zip}&appId=${apiKey}&units=imperial`;
    const response = await fetch(url);
    try {
        const apiData = await response.json();
        console.log(apiData);
        return apiData;
    } catch (error) {
        console.log('error', error);
    }
}

const sendWeatherInfo = async (url, sendData) =>{ 
    console.log(sendData);
    const response = await fetch(url, {
      method: 'POST', // *GETR, POST, PUT, DELETE, etc..
      credentials: 'same-origin', // include , *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendData),   // body data type must match 'Content-Type'
    });
    try {
        // .json() reads server response to completion
        // See https://developer.mozilla.org/en-US/docs/Web/API/Body/json
        const saveData = await response.json();
        console.log(saveData);
        return saveData;
    } catch(error) {
          console.log('error', error);
    }
}

const displayWeatherInfo = async (url) => {
    const request = await fetch(url);
    try{
        const serverData = await request.json();
        console.log(serverData);
        const data = serverData[serverData.length-1];
        document.getElementById('date').innerHTML = 'Date: ' + data.date;
        document.getElementById('temp').innerHTML = 'Temp (Fahrenheit): ' +data.temp;
        document.getElementById('content').innerHTML = 'Feelings: ' + data.content;
    } catch(error) {
        console.log("error", error);
    }
}