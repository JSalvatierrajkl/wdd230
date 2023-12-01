const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.getElementById('forecast-container');
const currentHumidity = document.getElementById('current-humidity');

const apiKey = '48f932869e33c0774d469492423a5f18';
const latitude = 20.507398813879846; 
const longitude = -86.94347216205391;
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

// Initialize alert elements
const alertContainer = document.getElementById('weatherAlertContainer');
const closeAlertButton = document.getElementById('closeWeatherAlert');

async function apiFetch() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
      displayForecast(data);
      checkWeatherAlert(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

function displayResults(data) {
  const currentWeather = data.list[0];
  const iconCode = currentWeather.weather[0].icon;

  captionDesc.textContent = currentWeather.weather[0].description;
  currentTemp.innerHTML = `
    <img src="https://openweathermap.org/img/w/${iconCode}.png" alt="${currentWeather.weather[0].description}">
    <p>${currentWeather.main.temp.toFixed(1)}°F</p>
    <p>Humidity: ${currentWeather.main.humidity}%</p>`;
}

function displayForecast(data) {
  forecastContainer.innerHTML = '';

  for (let i = 0; i < 1; i++) {
    const forecastItem = document.createElement('div');
    forecastItem.classList.add('forecast-item');

    const forecastWeather = data.list[i * 8];
    const date = new Date(forecastWeather.dt * 1000);
    const day = date.toLocaleDateString('en-US', { weekday: 'short' });

    forecastItem.innerHTML = `<p>${day}</p>
      <img src="https://openweathermap.org/img/w/${forecastWeather.weather[0].icon}.png" alt="${forecastWeather.weather[0].description}">
      <p>Day: ${forecastWeather.main.temp_max.toFixed(1)}°F</p>
      <p>Night: ${forecastWeather.main.temp_min.toFixed(1)}°F</p>`;

    forecastContainer.appendChild(forecastItem);
  }
}

function checkWeatherAlert(data) {
    const currentWeather = data.list[0];
    const isRain = currentWeather.weather[0].main === 'Rain';
    const isSnow = currentWeather.weather[0].main === 'Snow';   
    if (isRain || isSnow) {
      displayAlert(`Weather Alert: Today it is ${currentWeather.weather[0].main}ing, just be careful!`);
    }   
}

function displayAlert(message) {
    alertContainer.innerHTML = `<p>${message}</p>
      <button id="closeWeatherAlert">❌</button>`;    
    closeAlertButton.addEventListener('click', function () {
      alertContainer.style.display = 'none';
    });
}




apiFetch();