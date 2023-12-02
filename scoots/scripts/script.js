
// Make the hamburguer menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Reservation Button
const rentalBtn = document.getElementById("rental-btn");

rentalBtn.addEventListener("click", function() {
	window.location.href = "reservations.html";
});