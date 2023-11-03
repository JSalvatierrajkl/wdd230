// Get the current year and populate it in the footer's first paragraph
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Get the last modified date and populate it in the second paragraph
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Make the hamburguer menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Initialize display elements
const visitsDisplay = document.getElementById("visits");
// Get the stored value in Local Storage
let numVisits = window.localStorage.getItem("visits-ls");
if (numVisits === null) {
  // If there's no stored value, initialize it to 1
  numVisits = 1;
} else {
  // If there's a stored value, parse it as an integer
  numVisits = parseInt(numVisits);
}
// Display the number of visits
visitsDisplay.textContent = numVisits;
// Increment the number of visits
numVisits++;
// Store the new number
localStorage.setItem("visits-ls", numVisits);


// Dark Mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☁")) {
		main.style.background = "#282828";
		main.style.color = "#FFB703";
		modeButton.textContent = "🌅";
	} else {
		main.style.background = "#FFB703";
		main.style.color = "#023047";
		modeButton.textContent = "☁";
	}
});
