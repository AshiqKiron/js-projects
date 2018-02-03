/*https://css-tricks.com/using-conic-gradients-css-variables-create-doughnut-chart-output-range-input/*/

//grab element
const _R = document.getElementById('r'), 
      //get the parent node
      _W = _R.parentNode, 
      //create output element
      _O = document.createElement('output');

// current value of our range input
let val = null, conic = false;


function update() {
  let newval = +_R.value;

  //check if we have val value
  if(val !== newval) {
  //if not grab css variable value and set to it
    _W.style.setProperty('--val', _O.value = val = newval);
    if(conic) _O.setAttribute('aria-label', `${val}%`)
  }
};

update();

_O.setAttribute('for', _R.id);
_W.appendChild(_O);

if(getComputedStyle(_O).backgroundImage !== 'none') {
  conic = true;
  _W.classList.add('full');
  _O.setAttribute('role', 'img');
  _O.setAttribute('aria-label', `${val}%`)
}

addEventListener('input', update, false);
addEventListener('change', update, false);