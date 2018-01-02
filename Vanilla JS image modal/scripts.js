//grab all elements
const imgMain = document.getElementById('myImg');
const modalWindow = document.getElementById('myModal');
const closeModal =  document.getElementsByClassName('close')[0];
const modalContent = document.getElementById('img01');
const modalCaption = document.getElementById('caption');

//show modal image, caption and window
function showModal() {
	modalWindow.style.display = "block";
	modalContent.src = this.src;
	modalCaption.innerHTML = this.alt;
}

imgMain.addEventListener('click', showModal);

//clicking close icon will close modal window 
function hideModal() {
	modalWindow.style.display = "none";
}

closeModal.addEventListener('click', hideModal);

//clicking anywhere will close the modal window
function clickClose(event) {
    // if modal initiated, clicking anywhere will hide it 
    if (event.target == modalWindow) {
        modalWindow.style.display = "none";
    }
}
window.addEventListener('click', clickClose);
