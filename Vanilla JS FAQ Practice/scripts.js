const title = document.querySelectorAll('.content');
const txt = document.querySelectorAll('p');
const sign = document.querySelectorAll('span');


function faqToggle() {
	/*if (this.propertyName.includes('open'))*/
	this.classList.toggle('open');
	
	/*this.textContent.add('-');*/

}

title.forEach(title => title.addEventListener('click',faqToggle));
