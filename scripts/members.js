const membersContainer = document.querySelector('.grid');
const toggleViewButton = document.getElementById('toggleView');
let isGridView = true;
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

// Add event listeners
gridButton.addEventListener("click", () => toggleView("grid"));
listButton.addEventListener("click", () => toggleView("list"));

// Function to toggle between grid and list views
function toggleView(view) {
    display.className = view; // Set the class name to the specified view
}


function renderMembers() {
  // Fetch data from members.json
  fetch('data/members.json')
    .then((response) => response.json())
    .then((data) => {
        membersContainer.innerHTML = ''; 
        
      data.members.forEach((member) => {
        const memberItem = document.createElement(isGridView ? 'div' : 'li');
        memberItem.classList.add('member');
        // Organize grid card
        if (isGridView) {
          memberItem.innerHTML = `
            <h4>${member.name}</h4>
            <img src="images/${member.image}" alt="${member.name} logo" />
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">About Us</a>
            <p>Membership Level: ${member.membership_level}</p>
            <p>${member.other_info}</p>
          `;
          // Organize list card
        } else {
          memberItem.innerHTML = `
            <strong>${member.name}</strong>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <a href="${member.website}" target="_blank">About Us</a>
            <p>Membership Level: ${member.membership_level}</p>
            <p>${member.other_info}</p>
          `;
        }

        membersContainer.appendChild(memberItem);
      });
    });
}
