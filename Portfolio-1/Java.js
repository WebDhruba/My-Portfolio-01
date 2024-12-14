// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form validation
const form = document.querySelector('.input');
const inputs = form.querySelectorAll('input, textarea');
const submitButton = form.querySelector('button');

submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission

    let valid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            valid = false;
            input.style.borderColor = 'red'; // Highlight empty fields
        } else {
            input.style.borderColor = ''; // Reset if valid
        }
    });

    if (valid) {
        alert('Thank you for your message, ' + inputs[0].value + '!');
        form.reset(); // Reset form fields
    } else {
        alert('Please fill out all required fields.');
    }
});

// Toggle responsive menu (optional for future responsive updates)
const menuButton = document.querySelector('.menu-btn'); // Assuming a future menu button
const nav = document.querySelector('nav');

// Future toggle functionality placeholder
menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
})
