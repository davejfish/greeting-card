// grab DOM elements

const heading = document.getElementById('heading');
const cardHeading = document.getElementById('userText');

const textArea = document.getElementById('userDescription');
const cardDescription = document.getElementById('description');

const pictureSelect = document.getElementById('picture');
const cardImage = document.getElementById('cardImage');

const userTheme = document.getElementById('theme');
const greetingCard = document.getElementById('card');

const exportImage = document.getElementById('exportImage');



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

exportImage.addEventListener('click', async() => {
    const dataUrl = await domtoimage.toPng(greetingCard);
    const link = document.createElement('a');
    link.download = heading.value + '.png';
    link.href = dataUrl;
    link.click();
});