const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.add('active');
    menuToggle.style = "display: none;"
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.style = "display: block;"
});
