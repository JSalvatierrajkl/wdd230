
// make variables to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add a click event listener to the Add Chapter button
button.addEventListener('click', () => {
  // Check if the input is not blank
  if (input.value.trim() !== '') {
    // Create a new li element
    const li = document.createElement('li');
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    // Set the li element's textContent to the input value
    li.textContent = input.value;
    // Append the delete button to the li element
    li.appendChild(deleteButton);
    // Append the li element to the unordered list
    list.appendChild(li);
    // Add an event listener to the delete button to remove the li element when clicked
    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
      input.focus();
    });

    // Clear the input field
    input.value = '';
    // Set focus back to the input field
    input.focus();
  } else {
    // Provide a message or reminder if the input is blank
    alert('Please enter a chapter.');
    // Set focus to the input field
    input.focus();
  }
});

