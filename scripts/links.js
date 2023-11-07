const baseURL = "https://jsalvatierrajkl.github.io/wdd230/";
const linksURL = "https://jsalvatierrajkl.github.io/wdd230/data/links.json"; 

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    displayLinks(data.lessons);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayLinks(lessons) {
    const linksContainer = document.querySelector('#activity-links');
  
    lessons.forEach((lesson) => {
      const lessonText = `Lesson ${lesson.lesson}: ${lesson.links.map((link) => {
        return `<a href="${link.url}" target="_blank">${link.title}</a>`;
      }).join(' | ')}`;
      const lessonElement = document.createElement('p');
      lessonElement.innerHTML = lessonText;
      linksContainer.appendChild(lessonElement);
    });
  }
getLinks();