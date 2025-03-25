const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
});
