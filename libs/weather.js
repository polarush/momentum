const city = document.querySelector('.city')
const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const weatherDesc = document.querySelector('.weather-description')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
let inputWeather = document.querySelector('.city');



document.addEventListener('DOMContentLoaded', function() { 
    if (inputWeather) {
    inputWeather.value = localStorage.getItem("inputWeather") || "";
  
    inputWeather.addEventListener('input', function() {
        localStorage.setItem("inputWeather", this.value);
        inputWeather.textContent = this.value
      });
    }
  });

let defaultCity = 'Минск';
let url;
if ( !localStorage.getItem("inputWeather") || localStorage.getItem("inputWeather") === '' ) {
    city.value = 'Минск';
    localStorage.setItem("inputWeather", defaultCity) 
    url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=a4516c1904b91ca181769f33f1cec1c0&units=metric`;
}

else if (localStorage.getItem("inputWeather") === defaultCity) {
    getWeather() 
}

async function getWeather() {  
    // console.log(data.weather[0].id, data.weather[0].description, data.main.temp);

    url = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem("inputWeather")}&lang=ru&appid=a4516c1904b91ca181769f33f1cec1c0&units=metric`;
    try {
    const res = await fetch(url);
    const data = await res.json(); 
    
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDesc.textContent = data.weather[0].description;
    wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/c`;
    humidity.textContent = `Влажность: ${Math.round(data.main.humidity)}%`; 
    }
    catch {
        temperature.textContent = `Город не найден!`; 
        weatherDesc.textContent = ``;
        wind.textContent = ``;
        humidity.textContent = ``;
    }
}



getWeather()


