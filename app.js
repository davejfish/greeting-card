// grab DOM elements

const heading = document.getElementById('heading');
const cardHeading = document.getElementById('userText');



// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state

heading.addEventListener('input', () => {
    cardHeading.textContent = heading.value;
});