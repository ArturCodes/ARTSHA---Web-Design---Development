const lines = document.querySelectorAll('.line');
const menuButton = document.getElementById('.menu-toggle');

function toggleMenu() {

    console.log('test');

    lines.forEach(line => {
        line.classList.toggle('active');
    });
}

menuButton.addEventListener('click', toggleMenu);