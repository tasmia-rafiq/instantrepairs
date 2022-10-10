let sliderIndex = 1;
mobileSlides(sliderIndex);

// Next/previous controls
function addSlides(n) {
  mobileSlides(sliderIndex += n);
}

// Thumbnail image controls
function presentSlides(n) {
  mobileSlides(sliderIndex = n);
}

function mobileSlides(n) {
  let i;
  let slides = document.getElementsByClassName("r-slides");
  let dots = document.getElementsByClassName("r-dot");
  if (n > slides.length) { sliderIndex = 1 }
  if (n < 1) { sliderIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[sliderIndex - 1].style.display = "block";
  dots[sliderIndex - 1].className += " dot-active";
}
