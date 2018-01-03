const imgSource = document.querySelectorAll('img');
const showImg = document.getElementById('expandedImg');
const imgTxt = document.getElementById('imgtext');

function imgToggle() {
	showImg.parentElement.style.display = "block";
	showImg.src = this.src;
	imgTxt.innerHTML = this.alt;
}

imgSource.forEach(image => image.addEventListener('click', imgToggle));
