// grab DOM elements

const heading = document.getElementById('heading');
const cardHeading = document.getElementById('userText');

const textArea = document.getElementById('userDescription');
const cardDescription = document.getElementById('description');

const pictureSelect = document.getElementById('picture');
const cardImage = document.getElementById('cardImage');

const userTheme = document.getElementById('theme');
const greetingCard = document.getElementById('card');




// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state

heading.addEventListener('input', () => {
    cardHeading.textContent = heading.value;
});

textArea.addEventListener('input', () => {
    cardDescription.textContent = textArea.value;
});

pictureSelect.addEventListener('change', () => {
    cardImage.src = pictureSelect.value;
});

userTheme.addEventListener('change', () => {
    greetingCard.classList.value = 'greetingCard';
    greetingCard.classList.add(userTheme.value);
});