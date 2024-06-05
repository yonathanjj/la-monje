document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    navToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Marquee animation
    const marquee = document.querySelector('.animate-marquee');
    marquee.innerHTML += marquee.innerHTML; // Duplicate content for seamless loop
});
