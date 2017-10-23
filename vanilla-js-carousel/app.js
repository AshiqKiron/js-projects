(function () {
  'use strict';
  var slides = document.querySelectorAll('.testimonial-item'),
     button = document.getElementById('button'),
     arrows = document.querySelectorAll('.lnr'),
     carouselCount = 0,
     scrollInterval,
     interval = 5000;

  arrows[0].addEventListener('click', function (e) {
    e = e || window.event; // Use e if it exists or e will be equal to window.event
    e.preventDefault();
    carouselCount -= 100;
    slider();
    if (e.type !== 'autoClick') {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(autoScroll, interval);
    }
  });
  arrows[1].addEventListener('click', sliderEvent);
  arrows[1].addEventListener('autoClick', sliderEvent);
  
  function sliderEvent(e) {
    e = e || window.event;
    e.preventDefault();
    carouselCount += 100;
    slider();
    if (e.type !== "autoClick") {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(autoScroll, interval);
    }
  }
  
  function slider() {
    switch (carouselCount) {
      case -100:
        carouselCount = 0;
        break;
      case 300:
        carouselCount = 0;
        break;
      default:
        break;
    }
    console.log(carouselCount);
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%)');
    }
  }
  
  // create new Event to dispatch click for auto scroll
  var autoClick = new Event('autoClick');
  function autoScroll() {
    arrows[1].dispatchEvent(autoClick);
  }
  
  // set timing of dispatch click events
  scrollInterval = setInterval(autoScroll, interval);
  
})();