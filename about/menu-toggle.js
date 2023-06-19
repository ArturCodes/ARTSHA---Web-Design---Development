const lines = document.querySelectorAll('.line');
const opacityBG = document.getElementById('opacity-bg');
const mobileNav = document.getElementById('navbar-links');
const mobileButton = document.getElementById('menu-toggle-button')

function toggleMenu() {

    // activate class styles
    mobileNav.classList.toggle('mobile-nav-active');
    opacityBG.classList.toggle('opacity-active');
    lines.forEach(line => {
        line.classList.toggle('active');
    });

    // makes the mobile button position fixed (so on scroll it sticks to the nav)
    if (mobileNav.classList.contains('mobile-nav-active')) {
        mobileButton.style.position = 'fixed'
    } else {
        mobileButton.style.position = 'absolute'
    }

}