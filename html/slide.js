var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  // auto slide
  setTimeout(function(){showSlides(slideIndex += 1)}, 10000)
}


//change highlighting in one page
function removehighlight(){
  document.getElementById("home").classList.remove("active")
  document.getElementById("news").classList.remove("active")
  document.getElementById("contact").classList.remove("active")
  document.getElementById("about").classList.remove("active")

}

document.getElementById("home").addEventListener("click", function(){
  removehighlight();
  document.getElementById("home").classList.add("active");
});
document.getElementById("news").addEventListener("click", function(){
  removehighlight();
  document.getElementById("news").classList.add("active");
});
document.getElementById("contact").addEventListener("click", function(){
  removehighlight();
  document.getElementById("contact").classList.add("active");
});
document.getElementById("about").addEventListener("click", function(){
  removehighlight();
  document.getElementById("about").classList.add("active");
});
document.getElementById("banner").addEventListener("click", function(){
  removehighlight();
  document.getElementById("home").classList.add("active");
});