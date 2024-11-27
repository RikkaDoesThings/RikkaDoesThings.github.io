document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript file loaded!");

    function createParticles(container, count) {
        const containerElement = document.querySelector(container);
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating';

            // Random positions for the particles
            const randomTop = Math.random() * 100; // Random percentage between 0% and 100%
            const randomLeft = Math.random() * 100; // Random percentage between 0% and 100%
            
            particle.style.top = `${randomTop}%`;
            particle.style.left = `${randomLeft}%`;

            containerElement.appendChild(particle);
        }
    }

    // Generate particles for the entire body (under the header)
    createParticles('body', 70); // Adjust particle count as needed
});

document.addEventListener("DOMContentLoaded", function() {
    const typedText = document.querySelector('.typed-text');
    typedText.addEventListener('animationend', function() {
        typedText.classList.add('finished');
    });
});