const cardContainer = document.getElementById('memberContainer');


function renderSpotlightMembers() {
    // Fetch data from members.json
    fetch('data/members.json')
        .then(response => response.json())
        .then(jsonData => {
            // Filter members with silver or gold status
            const spotlightMembers = jsonData.members.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');

            // Shuffle the spotlight members randomly
            const shuffledMembers = shuffleArray(spotlightMembers);

            // Display only the first 3 members randomly
            const membersToShow = shuffledMembers.slice(0, Math.min(3, shuffledMembers.length));

            membersToShow.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member');

                memberCard.innerHTML = `
                    <h4>${member.name}</h4>
                    <img src="images/${member.image}" alt="${member.name} logo" />
                    <p>${member.address}</p>
                    <a href="${member.website}" target="_blank">About Us</a>
                    <p>Membership Level: ${member.membership_level}</p>
                `;

                cardContainer.appendChild(memberCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Initial rendering
renderSpotlightMembers();

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}