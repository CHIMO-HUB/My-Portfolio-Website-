document.addEventListener('DOMContentLoaded', () => {
    // Typing Animation
    const nameElement = document.getElementById('typed-name');
    if (nameElement) {
        const text = "CHUKWUNWIKE CHIMOBI |";
        let i = 0;
        nameElement.textContent = "";
        
        function typeEffect() {
            if (i < text.length) {
                nameElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeEffect, 100);
            }
        }
        setTimeout(typeEffect, 1000);
    }

    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass, .section-title, .hero-title').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });
});
