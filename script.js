document.addEventListener("DOMContentLoaded", () => {
    // Create blinking stars effect
    const numStars = 100; // Number of stars
    const body = document.querySelector('body');

    // Generate stars dynamically
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 2 + 1;  // Random size for each star
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}vh`;  // Random vertical position
        star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        star.style.animationDelay = `${Math.random() * 3}s`;  // Random animation delay
        body.appendChild(star);
    }
});
