document.addEventListener('DOMContentLoaded', () => {
    // 1. Contact Form Logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks for reaching out! Chimobi will get back to you soon.');
            contactForm.reset();
        });
    }

    // 2. Interactive Like Button Logic
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // This toggles the 'liked' class which changes the color in CSS
            button.classList.toggle('liked');
        });
    });

    // 3. Simple Fade-in effect
    document.body.style.opacity = 0;
    window.onload = () => {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = 1;
    };
});
