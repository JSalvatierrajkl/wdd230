// Declare a constant variable named "url" that contains the URL string of the JSON resource.
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Declare a constant variable named "cards" that selects the HTML div element with an id value of "cards".
const cards = document.querySelector('#cards');

// Create an async defined function named "getProphetData" to fetch data from the JSON source URL.
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

// Define a function expression named "displayProphets" to build cards for each prophet.
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');

    // Build the h2 content to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build the image portrait by setting attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append elements to the card section
    card.appendChild(fullName);
    card.appendChild(portrait);

    // Append the card to the "cards" div
    cards.appendChild(card);
  });
};

// Call the function to fetch and display prophet data.
getProphetData();
