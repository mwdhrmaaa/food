document.addEventListener('DOMContentLoaded', () => {
    console.log('Foodie App Initialized');

    // Smooth scroll for nav links
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === '#') return;
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Simple interaction for buttons
    const ctaButtons = document.querySelectorAll('.btn');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Button clicked:', btn.innerText);
        });
    });
});
