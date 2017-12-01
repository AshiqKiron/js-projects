/*
const panels = document.querySelectorAll('.accordion');
const text = document.querySelectorAll('.accordion-content');



function toggle() {
	this.classList.toggle("open");
	this.childNodes.toggle("open");
	items.forEach(item => {
			if(thisItem == item) {
				thisItem.classList.toggle('open');
				return;
			}

			item.classList.remove('open');
		});
		console.log(this);
}


panels.forEach(txt => txt.addEventListener('click', toggle));*/


//grab all the accordion class
var accordions = document.getElementsByClassName("accordion");

//loop thru them 
for (var i = 0; i < accordions.length; i++) {
	//attach click function
  accordions[i].onclick = function() {
  	//toggle is open class
    this.classList.toggle('is-open');
    //get next sibling class which is accordion-content
    var content = this.nextElementSibling;
    //conditional check to set content's max height prop
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}