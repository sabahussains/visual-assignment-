// script.js

// Example: Add a simple animation to the header
const header = document.querySelector('header');

header.addEventListener('mouseover', () => {
    header.style.backgroundColor = '#555';
    header.style.transition = 'background-color 0.5s ease';
});

header.addEventListener('mouseout', () => {
    header.style.backgroundColor = '#333';
});
