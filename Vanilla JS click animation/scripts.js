/* 
https://css-tricks.com/emulating-css-timing-functions-javascript/
We also need a few variables such as the request ID (this gets returned by requestAnimationFrame), the index of the current frame (an integer in the [0, NF] interval, starting at 0) and the direction our transition is going in (which is 1 when going towards 100% and -1 when going towards 0%).

While nothing is changing, the request ID is null. We also set the current frame index to 0 initially and the direction to -1, as if we've just arrived to 0% from 100%.
*/

const NF = 50; // number of frames transition happens over

let rID = null, f = 0, dir = -1;

function stopAni() {
  cancelAnimationFrame(rID);
  rID = null;  
};

function update() {
  f += dir; // update current frame index
  
  let k = f/NF;  // compute progress
  
  document.body.style.setProperty(
    '--stop', 
    `${+(k*100).toFixed(2)}%`
  );
  
  if(!(f%NF)) {
    stopAni();
    return;
  }
  
  rID = requestAnimationFrame(update)
};

addEventListener('click', e => {
  if(rID) stopAni(); // if an animation is already running, stop it
  dir *= -1; // change animation direction
  update();
}, false);