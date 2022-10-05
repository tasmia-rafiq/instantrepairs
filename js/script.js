const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.popup-mobilemenu');
const menuBar = document.getElementById('bar');
const close = document.getElementById('close');

var acc = document.getElementsByClassName("acc-btn");
var i;

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


// FAQ Accordion
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("acc-active");
  
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
