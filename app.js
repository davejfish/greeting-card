// grab DOM elements

const heading = document.getElementById('heading');
const cardHeading = document.getElementById('userText');

const textArea = document.getElementById('userDescription');
const cardDescription = document.getElementById('description');

const pictureSelect = document.getElementById('picture');
const cardImage = document.getElementById('cardImage');

const userTheme = document.getElementById('theme');
const greetingCard = document.getElementById('card');

const sectionOne = document.getElementById('sectionOne');
const sectionTwo = document.getElementById('sectionTwo');
const sectionThree = document.getElementById('sectionThree');

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
    switch (userTheme.value) {
        case 'forest':
            sectionOne.classList.value = 'sectionOne';
            sectionOne.classList.add('forest');
            sectionTwo.classList.value = 'sectionTwo';
            sectionTwo.classList.add('forestTwo');
            sectionThree.classList.value = 'sectionThree';
            sectionThree.classList.add('forest');
            break;
        case 'river':
            sectionOne.classList.value = 'sectionOne';
            sectionOne.classList.add('river');
            sectionTwo.classList.value = 'sectionTwo';
            sectionTwo.classList.add('riverTwo');
            sectionThree.classList.value = 'sectionThree';
            sectionThree.classList.add('river');
            greetingCard.classList.value = 'greetingCard';
            greetingCard.classList.add('dashedBorder');
            break;
        case 'mountain':
            sectionOne.classList.value = 'sectionOne';
            sectionOne.classList.add('mountain');
            sectionTwo.classList.value = 'sectionTwo';
            sectionTwo.classList.add('mountainTwo');
            sectionThree.classList.value = 'sectionThree';
            sectionThree.classList.add('mountain');
            break;
        case 'game':
            sectionOne.classList.value = 'sectionOne';
            sectionOne.classList.add('game');
            sectionTwo.classList.value = 'sectionTwo';
            sectionTwo.classList.add('gameTwo');
            sectionThree.classList.value = 'sectionThree';
            sectionThree.classList.add('game');
            break;
    }
});

exportImage.addEventListener('click', async() => {
    const dataUrl = await domtoimage.toPng(greetingCard);
    const link = document.createElement('a');
    link.download = heading.value + '.png';
    link.href = dataUrl;
    link.click();
});