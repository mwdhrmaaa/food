document.addEventListener('DOMContentLoaded', () => {
    console.log('Foodie App Initialized');

    // Dark Mode Toggle
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerText = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.innerText = isDark ? '☀️' : '🌙';
        
        // Add a nice pop effect
        themeToggle.style.transform = 'scale(1.2)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 200);
    });

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

    // Smooth scroll for "Our Menu" button in category slider
    const menuBtn = document.querySelector('.btn-all');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            const menuSection = document.getElementById('menuSection');
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Modal Logic
    const foodModal = document.getElementById('foodModal');
    const modalClose = document.querySelector('.modal-close');
    const foodCards = document.querySelectorAll('.food-card');

    const openModal = (card) => {
        const title = card.querySelector('h3').innerText;
        const price = card.querySelector('.price:first-child').innerText;
        const image = card.querySelector('img').src;
        const ingredients = card.dataset.ingredients || "Selected fresh ingredients";
        const description = card.dataset.description || "A delicious premium dish prepared by our expert chefs.";

        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalPrice').innerText = price;
        document.getElementById('modalImage').src = image;
        document.getElementById('modalIng').innerText = ingredients;
        document.getElementById('modalDesc').innerText = description;

        foodModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    const closeModal = () => {
        foodModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    };

    foodCards.forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close on outside click
    foodModal.addEventListener('click', (e) => {
        if (e.target === foodModal) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});
