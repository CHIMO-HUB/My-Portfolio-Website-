document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks for reaching out, Chimobi will get back to you soon!');
            contactForm.reset();
        });
    }

    // Add a simple fade-in effect to the body
    document.body.style.opacity = 0;
    window.onload = () => {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = 1;
    };
});
