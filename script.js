// // Get references to the button and the div
// const toggleButton = document.getElementById('toggleButton');
// const hiddenDiv = document.getElementById('hiddenDiv');

// // Add a click event listener to the button
// toggleButton.addEventListener('click', function() {
//   // Toggle the visibility of the div by toggling its 'display' style between 'block' and 'none'
//   if (hiddenDiv.style.display === 'none') {
//     hiddenDiv.style.display = 'block';
//   } else {
//     hiddenDiv.style.display = 'none';
//   }

//   // Disable the button after toggling
//   toggleButton.disabled = true;
// });


// Get references to all buttons and divs with the appropriate classes
const toggleButtons = document.querySelectorAll('.question');
const hiddenDivs = document.querySelectorAll('.answer');

// Loop through each button and add a click event listener
toggleButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    // Toggle the visibility of the corresponding div
    const div = hiddenDivs[index];
    if (div.style.display === 'none') {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }

    // Disable the clicked button
    button.disabled = true;
  });
});
