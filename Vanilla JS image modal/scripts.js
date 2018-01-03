/*
<div class="row">
  <div class="column">
    <img src="index_02.jpg" alt="Nature" style="width:100%" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="index_01.jpg" alt="Fjords" style="width:100%" onclick="myFunction(this);">
  </div>
</div>

<div class="container">
  <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>
  <img id="expandedImg" style="width:100%">
  <div id="imgtext"></div>
</div>
*/

const imgSource = document.querySelectorAll('img');
const showImg = document.getElementById('expandedImg');
const imgTxt = document.getElementById('imgtext');

function imgToggle() {
	showImg.parentElement.style.display = "block";
	showImg.src = this.src;
	imgTxt.innerHTML = this.alt;
}

imgSource.forEach(image => image.addEventListener('click', imgToggle));


/*
function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}*/