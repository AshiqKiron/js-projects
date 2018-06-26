//set current slide to 1
var slide = 1;
showSlide(slide);

//set function for current slide
function currentSlide(n) {
  showSlide(slide = n);
}

//set function for next slide
function plusSlides(n) {
  showSlide(slide += n);
}




//loop through and change slides and state, none - block 
function showSlide(n) {
  var i;
  //grab container
  var slides = document.getElementsByClassName("blogSlides");

  if (n > slides.length) {
    slide = 1
  }

  if (n < 1) {
    slide = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slide - 1].style.display = "block";
}


// //set slideIndex to 1
// var slideIndex = 1;
// showSlides(slideIndex);


// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// //set current slide function
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("blogSlides");

//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
  
//   slides[slideIndex - 1].style.display = "block";
  
// }