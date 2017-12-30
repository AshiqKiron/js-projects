
// Get the modal
const modal = document.querySelector('#myModal');

// Get the button that opens the modal
const btn = document.querySelector('#myBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

//show modal on click
function showModal() {
    modal.style.display = "block";
}

btn.addEventListener('click', showModal);

//hide modal on click
function closeModal() {
    modal.style.display = "none";
}

span.addEventListener('click', closeModal);


// When the user clicks anywhere outside of the modal, close it
function clickClose(event) {
    // if modal initiated clicking anywhere will hide it 
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.addEventListener('click', clickClose);