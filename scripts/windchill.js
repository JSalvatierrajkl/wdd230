// Initialize display elements
const visitsDisplay = document.getElementById("visits");
// Get the stored value in Local Storage
let lastVisit = window.localStorage.getItem("last-visit");
let currentDate = new Date();
if (lastVisit === null) {
  // If there's no stored value, initialize it to the current date
  window.localStorage.setItem("last-visit", currentDate);
  visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
  // Calculate the time difference between visits
  lastVisit = new Date(lastVisit);
  const timeDifference = currentDate - lastVisit;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  if (daysDifference === 0) {
    // If the user has visited within the same day
    visitsDisplay.textContent = "Back so soon! Awesome!";
  } else {
    // If it's been more than a day since the last visit
    let message = "You last visited " + daysDifference + " ";
    message += daysDifference === 1 ? "day" : "days";
    message += " ago.";
    visitsDisplay.textContent = message;
  }
  // Update the last-visit date to the current date
  window.localStorage.setItem("last-visit", currentDate);
}

// Get the current year and populate it in the footer's first paragraph
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
// Get the last modified date and populate it in the second paragraph
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Get the temperature and wind speed values
const temperature = parseInt(document.getElementById('temperature').textContent);
const windspeed = parseFloat(document.getElementById('windspeed').textContent);
// Check if the input values meet the specification limits
if (temperature <= 50 && windspeed > 3.0) {
  // Calling the function
  const windChill = calculateWindChill(temperature, windspeed);
  // Display the wind chill value
  document.getElementById('windchill').textContent = windChill.toFixed(2) + " °F";
} else {
  // Display "N/A" if the input values dont meet the requirements
  document.getElementById('windchill').textContent = "N/A";
}
// Function to calculate wind chill
function calculateWindChill(temperature, windspeed) {
  const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
  return windChill;
}




