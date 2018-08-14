let 
  scene = document.getElementById('scene'),
  control = document.getElementById('transform'),
  reset = document.getElementById('reset'),
  mouseActive = false;

// event handlers
control.addEventListener('change', update, false);
control.addEventListener('mousemove', update, false);
control.addEventListener('mouseup', update, false);
control.addEventListener('mousedown', update, false);
reset.addEventListener('click', e => setTimeout(update,1) , false);

update();

// transform object
function update(e) {
  
  //Return the type of event that was triggered
  let type = e && e.type;
  
  // mouse events
  if (type === 'mousedown' || type === 'mouseup') {
    mouseActive = type === 'mousedown';
    return;
  }
  if (type === 'mousemove' && !mouseActive) return;
  
  // create transform
  let style = {};
  for (let i = 0; i < control.length; i++) {
    
    let
      input = control[i],
      prop = input.dataset.prop || 'transform'
      name = input.name,
      value = input.value,
      unit = input.dataset.unit || '',
      out = input.nextElementSibling;
    
    // handle perspective
    if (prop === 'perspective' && value === '0') {
      value = 'none';
      unit = '';
    }
    
    if (out) {
      input.nextElementSibling.textContent = value + unit;
      style[prop] = 
        (style[prop] || '') +
        (prop === 'transform' ? `${name}(${value}${unit}) ` : `${value}${unit} `);
    }
    
  }
  
  // apply all styles
  for (let p in style) {
    scene.style[p] = style[p];
  }
  
}