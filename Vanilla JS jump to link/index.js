





let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

// let lastId;
// let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  // ScrollY = returns the number of pixels that the document is currently scrolled vertically.
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    //hash = Return the anchor part of a URL. Assume that the current URL is http://www.example.com/test.htm#part2
    let section = document.querySelector(link.hash);

    if (
      // offsetTop = returns the offset of the top edge of the visual viewport from the top edge of the layout viewport in CSS pixels.
      section.offsetTop <= fromTop &&
      // offsetHeight = the height of the element including vertical padding
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
