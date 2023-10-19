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