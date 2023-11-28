
// select HTML elements in the document
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');
  
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.63959398016743&lon=-58.56455591706348&appid=48f932869e33c0774d469492423a5f18&units=imperial';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

// function to display API results in the HTML document
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
  }
  

  apiFetch();