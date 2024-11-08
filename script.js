// Add interactivity like hover effects or smooth scrolling

// Smooth Scroll for anchor links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of music card animation on click
const musicCards = document.querySelectorAll('.music-card');
musicCards.forEach(card => {
    card.addEventListener('click', () => {
        alert('Now playing: ' + card.querySelector('h3').innerText);
    });
});
