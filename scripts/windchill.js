const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.getElementById('forecast-container');

const apiKey = '48f932869e33c0774d469492423a5f18';
const latitude = -34.63959398016743; 
const longitude = -58.56455591706348;
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
      displayForecast(data);
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

  currentTemp.textContent = `${currentWeather.main.temp.toFixed(1)}°F`;
  const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', currentWeather.weather[0].description);
  captionDesc.textContent = currentWeather.weather[0].description;
}

function displayForecast(data) {
  forecastContainer.innerHTML = '';

  for (let i = 0; i < 3; i++) {
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

apiFetch();



// function displayResults(data) {
//   const currentTemperature = data.list[0].main.temp;
//   const iconCode = data.list[0].weather[0].icon;
//   const description = data.list[0].weather[0].description;

//   currentTemp.textContent = `${currentTemperature.toFixed(1)}°F`;
//   const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
//   weatherIcon.setAttribute('src', iconSrc);
//   weatherIcon.setAttribute('alt', description);
//   captionDesc.textContent = description;
// }

// function displayForecast(data) {
//   forecastContainer.innerHTML = '';

//   for (let i = 0; i < data.list.length; i += 8) {
//     const forecastItem = document.createElement('div');
//     forecastItem.classList.add('forecast-item');

//     const date = new Date(data.list[i].dt * 1000);
//     const day = date.toLocaleDateString('en-US', { weekday: 'short' });

//     const tempDay = data.list[i].main.temp_max.toFixed(1);
//     const tempNight = data.list[i].main.temp_min.toFixed(1);
//     const icon = data.list[i].weather[0].icon;

//     forecastItem.innerHTML = `<p>${day}</p>
//       <img src="https://openweathermap.org/img/w/${icon}.png" alt="${data.list[i].weather[0].description}">
//       <p>Day: ${tempDay}°F</p>
//       <p>Night: ${tempNight}°F</p>`;

//     forecastContainer.appendChild(forecastItem);
//   }
// }

apiFetch();





























// // Initialize display elements
// const visitsDisplay = document.getElementById("visits");
// // Get the stored value in Local Storage
// let lastVisit = window.localStorage.getItem("last-visit");
// let currentDate = new Date();
// if (lastVisit === null) {
//   // If there's no stored value, initialize it to the current date
//   window.localStorage.setItem("last-visit", currentDate);
//   visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
// } else {
//   // Calculate the time difference between visits
//   lastVisit = new Date(lastVisit);
//   const timeDifference = currentDate - lastVisit;
//   const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//   if (daysDifference === 0) {
//     // If the user has visited within the same day
//     visitsDisplay.textContent = "Back so soon! Awesome!";
//   } else {
//     // If it's been more than a day since the last visit
//     let message = "You last visited " + daysDifference + " ";
//     message += daysDifference === 1 ? "day" : "days";
//     message += " ago.";
//     visitsDisplay.textContent = message;
//   }
//   // Update the last-visit date to the current date
//   window.localStorage.setItem("last-visit", currentDate);
// }

// // Get the current year and populate it in the footer's first paragraph
// const currentYear = new Date().getFullYear();
// document.getElementById('currentYear').textContent = currentYear;
// // Get the last modified date and populate it in the second paragraph
// const lastModified = document.lastModified;
// document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// // Get the temperature and wind speed values
// const temperature = parseInt(document.getElementById('temperature').textContent);
// const windspeed = parseFloat(document.getElementById('windspeed').textContent);
// // Check if the input values meet the specification limits
// if (temperature <= 50 && windspeed > 3.0) {
//   // Calling the function
//   const windChill = calculateWindChill(temperature, windspeed);
//   // Display the wind chill value
//   document.getElementById('windchill').textContent = windChill.toFixed(2) + " °F";
// } else {
//   // Display "N/A" if the input values dont meet the requirements
//   document.getElementById('windchill').textContent = "N/A";
// }
// // Function to calculate wind chill
// function calculateWindChill(temperature, windspeed) {
//   const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
//   return windChill;
// }




