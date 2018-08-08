
https://uxdesign.cc/how-to-fix-dragging-animation-in-ui-with-simple-math-4bbc10deccf7

//select card element
var card = document.querySelector('#card');

// Sigmoid function
var sigmoid = function(x) {
  return (x / (1 + Math.abs(x)));
};

// Stores X and Y coordinates of Mouse
var MousePosition = {
  x: 0,
  y: 0
};

// Stores X and Y Coordinates of the Card
var CardPosition = {
  x: 0,
  y: 0
};
   In the article, we’re calculating rotation angle based on velocity. 
   Not directly though, we’re wrapping velocity in sigmoid, sigmoid(xVelocity). 
   This is because velocity changes can be erratic and mapping rotation directly to xVelocity will not produce desired (read smooth) animation. 
  Wrapping velocity in sigmoid does that for us. Notice how the curve smoothly rises and falls.
var xVelocity = 0;
var rotation = 0;

//continuously updates the value of MousePosition Object on mouseHover event
var update = function() {
  xVelocity = (MousePosition.x - CardPosition.x);
  
  CardPosition.x = MousePosition.x;
  CardPosition.y = MousePosition.y;
  
  //calculates and assigns value to the rotation variable
  // remove the jitter by additively applying the the result of sigmoid to rotation.
  //when dragging stops, xVelocity becomes 0. Therefore the latter half of the code, after +, becomes 0, as sigmoid(0) = 0.
  //finally adjust the damping duration and sensitivity of rotation respectively.
rotation = rotation * 0.9 + (sigmoid(xVelocity) * 1.5);
  
  // Update the position of card
  card.style.top = CardPosition.y + 'px';
  // Subtract (Width of card / 2 = 125) to centre cursor on top
  card.style.left = (CardPosition.x - 125) + 'px';
  
  //the rotation value is close to zero, round it up to 0 (Zeno’s paradox)
  //Math abs returns the absolute value of a number
  if (Math.abs(rotation) < 0.01) rotation = 0;
  
  card.style.transform = `rotate(${rotation}deg)`;
  
  requestAnimationFrame(update); 
};

update();


document.addEventListener('mousemove', function(e) {
     Output the coordinates of the mouse pointer when the mouse button being hovered
  MousePosition.x = e.clientX;
  MousePosition.y = e.clientY;
});