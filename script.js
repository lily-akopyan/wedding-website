const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-flex ul');


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});