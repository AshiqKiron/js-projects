
'use strict()';

//select todo items and store 
var list      = document.getElementById('todo-items');
//select and store add new todo
var itemInput = document.getElementById('todo-add-new');
//declare empty todo array
var toDoObjects = [];

//add todo function
var addToDo = function() {
  var todo = {
    //grab new item input value
    text: itemInput.value,
    //set as incomplete
    status: 'incomplete',
    id: generateId()
  };

  //add to DOM
  addToDoToDom(todo);
  //add to localStorage
  addToDoToStorage(todo);
};

//item add to DOM function
var addToDoToDom = function(todo) {
  //select newly created li elem
  var item        = document.createElement('li');
  //get all children node count (li)
  var listLength  = list.children.length;
  //add htmls
  var itemText    = '<label class="todo__text"><input type="checkbox" id="too-doo-check_' + todo.id + '"';
  //complete status check for checkobx
  if (todo.status === 'complete') {
    itemText += 'checked=checked';
  }
  itemText += '/><span class="px1">' + todo.text + '</span></label>';
  //add remove class & button
  var itemAction  = '<span class="todo__remove"><button type="button" class="btn btn--icon" id="button-' + todo.id + '"><i class="icon icon--remove"></i></button></span>';


  //add html to element
  item.innerHTML = itemText + itemAction;
  //suffix todo incremental id(1,2,3,4)
  item.id = 'too-doo_' + (listLength + 1);
  //add todo__item class
  item.classList.add('todo__item');
  //set data-attribute status
  item.setAttribute('data-status', todo.status);
  //set data-attribute id
  item.setAttribute('data-id', todo.id);
  //append item to list (ul)
  list.appendChild(item);
  //clear todo-add-new 
  itemInput.value = '';
};

//Add item to localStorage function
var addToDoToStorage = function(todo) {
  //add new item to the end of the array
  toDoObjects.push(todo);
  //save new item to localStorage storage.setItem(keyName, keyValue);
  localStorage.setItem('toDoObjects', JSON.stringify(toDoObjects));
};

//Load added item from localStorage function
var loadToDosFromStorage = function() {
  var str = localStorage.getItem('toDoObjects');
  if (str) {
    //parse todoObjects JSON value
    toDoObjects = JSON.parse(str);
  }

  // construct dom html from toDoObjects
  for (var i=0; i<toDoObjects.length; i++) {
    addToDoToDom(toDoObjects[i]);
  }
};

//Complete todo function
var completeToDo = function(event) {
  var check = event.target;
  var toDo = check.closest('li');
  var toDoStatus = toDo.getAttribute('data-status');
  var toDoId = toDo.getAttribute('data-id');
  
  //check for data status of to-do
  if (toDoStatus === 'incomplete') {
    toDoStatus = 'complete';
  } else {
    toDoStatus = 'incomplete';
  }

  //set data-status 
  toDo.setAttribute('data-status', toDoStatus);

  //add the todo object with matching id from toDoObjects
  for (var i = 0; i < toDoObjects.length; i++) {
    if (toDoObjects[i].id === toDoId) {
      toDoObjects[i].status = toDoStatus;
    }
  }

  //set to localStorage
  localStorage.setItem('toDoObjects', JSON.stringify(toDoObjects));
};

//remove todo function
var removeToDo = function(event) {
  var button = event.target.closest('button');
  if(!button) {
    return false;
  }
  var toDo = button.closest('li');
  var toDoId = toDo.getAttribute('data-id');

  // 1. remove the li from the dom
  list.removeChild(toDo);
  // 2. remove the todo object with matching id from toDoObjects
  for (var i = 0; i < toDoObjects.length; i++) {
    if (toDoObjects[i].id === toDoId) {
      toDoObjects.splice(i, 1);
    }
  }
  // 3. set toDoObjects into localStorage as JSON
  localStorage.setItem('toDoObjects', JSON.stringify(toDoObjects));
};


//Validate todo function
var validateToDo = function(event) {
  event.preventDefault();
  //if no value added show error message
  if(!itemInput.value) {
    document.getElementById('error').innerHTML = 'Please enter a value!';
  } else {
    addToDo();
  }
};

//clear todo function
var clearToDos = function(event) {
  event.preventDefault();
  //clear localstorage items
  window.localStorage.clear();
  //reload the localstorage from the server (it's kinda doing hard refresh)
  location.reload();
  return false;
};

//generate ID of the todo item
/*take random eight character and set it as to-do item data id*/
var generateId = function() {
  var charSet = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charSetSize = charSet.length;
  var charCount = 8;
  var id = '';
    for (var i = 1; i <= charCount; i++) {
        var randPos = Math.floor(Math.random() * charSetSize);
        id += charSet[randPos];
    }
    return id;
}

document.getElementById('clear-todos').addEventListener('click', clearToDos, false);

document.getElementById('btn-submit').addEventListener('click', validateToDo, false);

//fires when the user presses a key (on the keyboard).
itemInput.onkeydown = function(event) {
  //Get the Unicode value of the pressed keyboard key
  if(event.keyCode == 13) {
    //validate
    validateToDo(event);
    return false;
  }
};

//add event listener
var toDoHandlers = function() {
  list.addEventListener('change', completeToDo, false);
  list.addEventListener('click', removeToDo, false);
};

//execute events with page load
window.onload = function(){
  toDoHandlers();
};

//
loadToDosFromStorage();