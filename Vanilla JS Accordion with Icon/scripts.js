let acc = document.getElementsByClassName("accordion");
let i;


for (i = 0; i < acc.length; i++) {
  //attach event listener for every accordion element
  acc[i].addEventListener("click", function() {
    //toggle active class on accordion
    this.classList.toggle("active");
    //get the panel element
    let panel = this.nextElementSibling;
    //set condition panel element auto height
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      //scrollHeight: ENTIRE content & padding (visible or not)
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}