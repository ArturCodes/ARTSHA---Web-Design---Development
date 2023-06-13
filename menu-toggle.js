const lines = document.querySelectorAll('.line');
const opacityBG = document.getElementById('opacity-bg');
const mobileNav = document.getElementById('navbar-links');

function toggleMenu() {

    lines.forEach(line => {
        line.classList.toggle('active');
    });

    mobileNav.classList.toggle('mobile-nav-active');
    opacityBG.classList.toggle('opacity-active');

}