// const got = require('got');

// const handler = (response) =>{
//   const responseObject = JSON.parse(response.body);
//   console.log(responseObject)
// }

// const url = 'https://api.github.com/repos/sinatra/sinatra';

// got(url).then(handler);

const got = require('got');
const apiKey = require('./apiKey');// include our key
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body);
  console.log(weatherData);
  console.log(weatherData.main.temp);
  console.log(weatherData.weather[0].main);
});



console.log('Requesting weather data');
