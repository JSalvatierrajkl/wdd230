// Declare a url constant variable 
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Declare a constant variable named "cards"
const cards = document.querySelector('#cards');

// Create an async defined function to fetch data
const getProphetData = async () => {
  try {
    // Fetch data from the JSON source.
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    // Convert the response to a JSON object.
    const data = await response.json();

    // Call the function to display prophets.
    displayProphets(data.prophets);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Define a function to build cards for each prophet.
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');

    // Build the h2
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build the image 
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append elements
    card.appendChild(fullName);
    card.appendChild(portrait);

    // Append the card to the "cards" div
    cards.appendChild(card);
  });
};

// Call the function to fetch and display prophet data.
getProphetData();
