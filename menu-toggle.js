const lines = document.querySelectorAll('.line');
const menuButton = document.getElementById('.menu-toggle');

function toggleMenu() {

    lines.forEach(line => {
        line.classList.toggle('active');
    });
}
