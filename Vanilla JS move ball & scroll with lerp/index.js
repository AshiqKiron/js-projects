//https://codepen.io/rachsmith/post/animation-tip-lerp
// Follow the mouse - no lerp
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// var width = window.innerWidth;
// var height = window.innerHeight;
// var x = window.innerWidth/2;
// var y = window.innerHeight/2;
// resize();

// function drawBall() {
//   ctx.beginPath();
//   ctx.arc(x,y,40,0,2*Math.PI);

//   ctx.fillStyle = '#9e356a';
//   ctx.fill();
// }

// function loop() {
//   ctx.clearRect(0, 0, width, height);
//   drawBall();
//   requestAnimationFrame(loop);
// }

// loop();

// function touch(e) {
//   x = e.originalEvent.touches[0].pageX;
//   y = e.originalEvent.touches[0].pageY;
// }

// function mousemove(e) {
//   x = e.pageX;
//   y = e.pageY;
// }

// function resize() {
//   width = canvas.width = window.innerWidth;
//   height = canvas.height = window.innerHeight;
// }

// window.addEventListener('resize', resize);
// window.addEventListener('touchstart', touch);
// window.addEventListener('touchmove', touch);
// window.addEventListener('mousemove', mousemove);





//follow the mouse with lerp
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// var width = window.innerWidth;
// var height = window.innerHeight;
// var x = window.innerWidth/2;
// var y = window.innerHeight/2;
// var ballX = x;
// var ballY = y;
// resize();

// function drawBall() {
//   ctx.beginPath();
//   // instead of updating the ball position to the mouse position we will lerp 10% of the distance between the balls current position and the mouse position.
//   ballX += (x - ballX)*0.1;
//   ballY += (y - ballY)*0.1;
//   ctx.arc(ballX, ballY, 40, 0, 2*Math.PI);
//   ctx.fillStyle = '#9e356a';
//   ctx.fill();
// }

// function loop() {
//   ctx.clearRect(0, 0, width, height);
//   drawBall();
//   requestAnimationFrame(loop);
// }

// loop();

// function touch(e) {
//   x = e.originalEvent.touches[0].pageX;
//   y = e.originalEvent.touches[0].pageY;
// }

// function mousemove(e) {
//   x = e.pageX;
//   y = e.pageY;
// }

// function resize() {
//   width = canvas.width = window.innerWidth;
//   height = canvas.height = window.innerHeight;
// }

// window.addEventListener('resize', resize);
// window.addEventListener('touchstart', touch);
// window.addEventListener('touchmove', touch);
// window.addEventListener('mousemove', mousemove);






//scroll with lerp

var scrollArea = document.getElementById('space');
var scrollIndicator = document.getElementById('indicator');
var scrollHeight = 0;
var scrollOffset = 0;
var scrollPercent = 0;
var indicatorPosition = scrollPercent;

resize();

function loop() {
  scrollOffset = window.pageYOffset || window.scrollTop;
  scrollPercent = scrollOffset/scrollHeight || 0;
  indicatorPosition += (scrollPercent-indicatorPosition)*0.05;
  var transformString = 'translateX('+(indicatorPosition*300)+'px)';
  indicator.style.mozTransform = transformString;
  indicator.style.webkitTransform = transformString;
  indicator.style.transform = transformString;
  
  requestAnimationFrame(loop);
}

loop();

function resize() {
  scrollHeight = window.innerHeight*4;
  scrollArea.style.height = (window.innerHeight*5)+'px';
}

window.addEventListener('resize', resize);