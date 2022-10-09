var sliderIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    imgSlider(sliderIndex);
    myTimer = setInterval(function(){addSlides(1)}, 3000);
  
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
})

// NEXT AND PREVIOUS CONTROL
function addSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    imgSlider(sliderIndex -= 1);
  } else {
   imgSlider(sliderIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){addSlides(n + 2)}, 3000);
  } else {
    myTimer = setInterval(function(){addSlides(n + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function presentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){addSlides(n + 1)}, 3000);
  imgSlider(sliderIndex = n);
}

function imgSlider(n){
  var i;
  var imgSlides = document.getElementsByClassName("imgSlides");
  var dotNav = document.getElementsByClassName("dot-nav");
  if (n > imgSlides.length) {sliderIndex = 1}
  if (n < 1) {sliderIndex = imgSlides.length}
  for (i = 0; i < imgSlides.length; i++) {
      imgSlides[i].style.display = "none";
  }
  for (i = 0; i < dotNav.length; i++) {
      dotNav[i].className = dotNav[i].className.replace(" dot-nav-active", "");
  }
  imgSlides[sliderIndex-1].style.display = "block";
  dotNav[sliderIndex-1].className += " dot-nav-active";
}