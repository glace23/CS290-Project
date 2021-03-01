var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n, true);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n, true);
}

function showSlides(n, check=false) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  // scroll back to first index
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
    //block all slides from showing
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // show slide at index -1
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  // auto slide
  if (check == false){
    setTimeout(function(){showSlides(slideIndex += 1)}, 10000)
  }
}
