const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.popup-mobilemenu');
const menuBar = document.getElementById('bar');
const close = document.getElementById('close');

window.onscroll = () => {
    if (document.documentElement.scrollTop > 150) {
        navbar.classList.add("scroll-on");
    } else {
        navbar.classList.remove("scroll-on");
    }
}

if (menuBar) {
    menuBar.addEventListener('click', () => {
        mobileMenu.classList.add('menu-open');
    })
}

if (close) {
    close.addEventListener('click', () => {
        mobileMenu.classList.remove('menu-open');
    })
}
