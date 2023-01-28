// document.getElementById("time").addEventListener("click", foo);

// function foo() {
//   setTimeout(() => {
//     document.body.innerHTML = "div";
//   }, 5000);
// }

// function debounce(func, ms) {
//   let timeout;
//   return function () {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, arguments), ms);
//   };
// }

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


