// Space Mission JavaScript

// Form submission handling
const missionForm = document.querySelector('.mission-form');

if (missionForm) {
    missionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const department = document.getElementById('department').value;
        const message = document.getElementById('message').value;

        if (name && department && message) {
            alert(`Message received from ${name} (${department})!\n\nYour message has been transmitted to command.`);
            missionForm.reset();
        } else {
            alert('Please complete all fields before submitting.');
        }
    });
}

// Animate power bars on page load
window.addEventListener('load', () => {
    const powerBars = document.querySelectorAll('.power-fill');
    powerBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});

// Add navigation active state based on current page
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage ||
        (currentPage === '' && link.getAttribute('href') === 'index.html')) {
        link.classList.add('active');
    }
});

console.log('🚀 Mission Control Systems Online');