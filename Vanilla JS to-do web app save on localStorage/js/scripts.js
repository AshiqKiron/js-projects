//https://www.taniarascia.com/how-to-use-local-storage-with-javascript/

//grab all the elements
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
//if exists get localstorage items or empty array
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


//Add new li to ul with an anonymous Arrow function (es6 Feature) and save to a variable
const liMaker = (text) => {
  //create li element
  const li = document.createElement('li');
  //set li content to text var es6
  li.textContent = text;
  //append li to parent node ul
  ul.appendChild(li);
}

//add blank new li on submit
form.addEventListener('submit', function(e){
	//prevent form submit
	e.preventDefault();

	//push new value into empty array
	itemsArray.push(input.value);
	//set the localStorage to the new, updated value
	localStorage.setItem('items',JSON.stringify(itemsArray));
	//get input value empty
	liMaker(input.value);
	//set the li value to empty
	input.value=''
});

//create a localStorage key called “items
//convert a data array to a string
localStorage.setItem('items', JSON.stringify(itemsArray));
//convert the contents of localStorage to data
const data = JSON.parse(localStorage.getItem('items'));

//loop thru li & show on front
data.forEach(item => {
	liMaker(item);
});

//clear all data from localStorage
button.addEventListener('click', function () {
	//clear localStorage
	localStorage.clear();
	//if ul child element exists remove them
	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}
});
