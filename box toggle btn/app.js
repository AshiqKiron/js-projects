function startToggle() {

var Header = document.getElementById('Header');
var toggleBtn = document.createElement('button');
toggleBtn.innerHTML='Toggle Shades';
toggleBtn.setAttribute('class','button');
Header.insertBefore(toggleBtn, Header.firstChild);

function clickWatcher() {
  [].map.call(document.querySelectorAll('.shade-added'),function(el) {
    el.classList.toggle('hidden');
  })
}

toggleBtn.addEventListener('click', clickWatcher);

}

startToggle();

/*function toggleEl() {

  var Header = document.getElementById('Header');

  var toggleBtn1 = document.createElement('button');
  toggleBtn1.innerHTML='show added shades';
  toggleBtn1.setAttribute('class', 'button');

  Header.insertBefore(toggleBtn1, Header.firstChild);

// https://www.jamestease.co.uk/blether/add-remove-or-toggle-classes-using-vanilla-javascript
// First we detect the click event
  toggleBtn1.addEventListener('click', function () {
    // querySelectorAll returns all the nodes it finds with the selector
    // however, you can't iterate over querySelectorAll results (!!)
    // so this is a workaround - call Array.map and pass in the 
    // list of nodes along with a function
    // technically querySelectorAll returns a NodeList not an Array so
    /// doesn't have standard array functions
    [].map.call(document.querySelectorAll('.shade-added'), function(el) {

      // classList is the key here - contains functions to manipulate
      // classes on an element
      el.classList.toggle('hidden');
    });
  });

} 
toggleEl();*/