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