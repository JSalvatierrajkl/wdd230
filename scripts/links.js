const baseURL = "https://jsalvatierrajkl.github.io/wdd230/"; 
const linksURL = "https://jsalvatierrajkl.github.io/wdd230/data/links.json"; 
const cards = document.querySelector('#activities');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data); // Testing
    displayLinks(data);
  }
  
  getLinks();

  function displayLinks(weeks) {
    const linksSection = document.getElementById("#activities"); 
  
    weeks.forEach((week) => {
      const weekDiv = document.createElement("div");
      weekDiv.className = "week";
  
      const weekHeading = document.createElement("h3");
      weekHeading.textContent = `Week ${week.lesson}`;
  
      const linksList = document.createElement("ul");
  
      week.links.forEach((link) => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
  
        anchor.href = baseURL + link.url;
        anchor.textContent = link.title;
  
        listItem.appendChild(anchor);
        linksList.appendChild(listItem);
      });
  
      weekDiv.appendChild(weekHeading);
      weekDiv.appendChild(linksList);
      linksSection.appendChild(weekDiv);
    });
  }