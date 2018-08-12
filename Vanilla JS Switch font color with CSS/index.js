/*
  JS is used only to set the CSS custom properties used in the base color
  Color changes are calculated in CSS 
*/

const root = document.documentElement;
//The call() method calls a function with a given this value and arguments provided individually.
const inputs = [].slice.call(document.querySelectorAll('input'));

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate(e) {
   if (this.id === 'hue') root.style.setProperty('--hue', this.value);
   if (this.id === 'saturation') root.style.setProperty('--sat', this.value);
  if (this.id === 'lightness') root.style.setProperty('--light', this.value);
}