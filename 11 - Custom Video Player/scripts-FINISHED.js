//get the elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


//build out functions
function togglePlay() {
  //paused is a property lives in the video 
  //play is a default native function 
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  //this refers to video
  const icon = this.paused ? '►' : '❚ ❚';
  //insert icon ► ❚ ❚ in the html
  toggle.textContent = icon;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  //display volumn & playbackrate
  //console.log(this.name);
  //display respective value on change & mousemove event
  //console.log(this.value);
}

//updates the video progressBar with skip buttons
function handleProgress() {
  //we're getting 50% not 0.5
  //video.currentTime & video.duration is a default property
  const percent = (video.currentTime / video.duration) * 100;
  //set the flex basis to the percent we're getting from moving
  progressBar.style.flexBasis = `${percent}%`;
}


function skip() {
  //get the object data value (25 & -10)
  //console.log(this.dataset.skip);
  //parseFloat will convert the string into a number
  video.currentTime += parseFloat(this.dataset.skip);
}

function scrub(e) {
  //  progress.offsetWidth = width of the bar
  //e.offsetX give where we clicked into the bar
  const  scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(buttons => buttons.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);