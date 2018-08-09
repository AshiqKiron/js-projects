

// https://medium.freecodecamp.org/understanding-linear-interpolation-in-ui-animations-74701eb9957c

let canvas = document.getElementById('canvas');
  //set 2d context, width & height
  context = canvas.getContext('2d');
  //InnerWidth = Width (in pixels) of the browser window viewport including, if rendered, the vertical scrollbar.
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;


// Point A
let startX = 50, startY = 50;
// Point B
let endX = 420, endY = 200;

// Current position of the ball
let x = startX, y = startY;

update();
function update() {
  //clearRect = Canvas 2D API sets all pixels in the rectangle defined by starting point (x, y) 
  //and size (width, height) to transparent black, erasing any previously drawn content.
  context.clearRect(0, 0, width, height);
  drawBall(x, y, 30);
   //lerp(ratio, start, end) gives you a Number
    /*These steps are repeated until x becomes endX and y becomes endY in which case min = max. 
    When min and max become equal lerp throws the exact same value(min/max) for any further frames thus stopping the animation.*/
  x = lerp(x, endX, 0.1);
  y = lerp(y, endY, 0.1);
  requestAnimationFrame(update);
}


function drawBall(x, y, radius) {
  //beginPath = starts a new path by emptying the list of sub-paths. 
  //Call this method when you want to create a new path.
  context.beginPath(); 
  //fillStyle = specifies the color or style to use inside shapes. The default is #000 (black).
  context.fillStyle = '#66DA79';
  /*arc() = adds an arc to the path which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction by anticlockwise (defaulting to clockwise).*/
  //ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
  //Math PI = represents the ratio of the circumference of a circle to its diameter, approximately 3.14159
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  //fill = paint the element; for animation it lets define what is the final state of the animation
   context.fill();
}

   //linear interpolation gives you a solid number given a fraction number .85 becomes 85
   //https://codepen.io/rachsmith/post/animation-tip-lerp
function lerp(min, max, fraction) {
  return (max - min) * fraction + min;
}

window.addEventListener('click', e => {
  endX = e.pageX;
  endY = e.pageY;
});