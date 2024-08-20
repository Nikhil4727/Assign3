// Get references to the elements
const button = document.querySelector('.toggle-button');
const container = document.querySelector('.container');
const text = document.querySelector('.text');

// Initial state
let isActive = false;

// Add click event listener to the button
button.addEventListener('click', () => {
    // Toggle the state
    isActive = !isActive;

    if (isActive) {
        // Change text and container color when active
        text.textContent = 'Active State';
        container.style.backgroundColor = '#ed07a5';
        button.textContent = 'Reset';
        button.classList.add('active');
    } else {
        // Revert to the initial state
        text.textContent = 'Initial Text';
        container.style.backgroundColor = 'lightblue';
        button.textContent = 'Click Me';
        button.classList.remove('active');
    }
});
