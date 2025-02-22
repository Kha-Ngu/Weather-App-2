const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY = '947887e0d1cce598ee661b2ded71a236';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12: hour
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM' /**if, else */

    timeEl.innerHTML = hoursIn12HrFormat + ":" + minutes + ' ' + '<span id="am-pm">${ampm}</spam>'
    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];
}, 1000);

getWeatherData()
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {

        let {latitude, longitude} = success.coords;

        fetch('https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}').then(res => res.json()).then(data =>{
             console.log(data);
        })
    })
}