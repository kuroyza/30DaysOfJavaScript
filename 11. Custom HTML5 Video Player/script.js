const container = document.querySelector('.player');
const video = document.querySelector('.viewer');
const toggleBtn = document.querySelector('.toggle');
const rangeInputs = document.querySelectorAll('.player__slider');
const skipingTimeBtns = document.querySelectorAll('[data-skip]');
const progress = document.querySelector('.progress');
const filledProgress = document.querySelector('.progress__filled');
const fullScreen = document.querySelector('.fullScreen');
let mousedown = false;

// Init Video
filledProgress.style.flexBasis = `0%`;


function updateBtn() {
   toggleBtn.textContent = this.paused ? '►' : '❚ ❚';
   toggleBtn.title = this.paused ? 'Toggle Play' : 'Toggle Pause';
}

function skipTime(e) {
   video.currentTime += parseFloat(e.target.dataset.skip);
}

function playerToggle() {
   const method = video.paused ? 'play' : 'pause';
   video[method]();
}

function rangeUpdate() {
   video[this.name] = this.value;
}

function handleProgress() {
   let percent = (video.currentTime / video.duration) * 100;
   filledProgress.style.flexBasis = `${percent}%`;
}

function scrub(e) {
   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
   console.log(typeof scrubTime);
   video.currentTime = scrubTime;
}

function toggleFullScreen() {
   if (video.requestFullscreen) {
      video.requestFullscreen();
   } else if (video.mozRequestFullScreen) {
      /* Firefox */
      video.mozRequestFullScreen();
   } else if (video.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      video.webkitRequestFullscreen();
   } else if (video.msRequestFullscreen) {
      /* IE/Edge */
      video.msRequestFullscreen();
   }
}

/* Event Listeners List */
toggleBtn.addEventListener('click', playerToggle);
video.addEventListener('click', playerToggle);

window.addEventListener('keyup', e => {
   if (e.keyCode == 32) playerToggle();
});

video.addEventListener('pause', updateBtn);
video.addEventListener('play', updateBtn);
video.addEventListener('progress', handleProgress);


// Skiping
skipingTimeBtns.forEach(skippingTimeBtn => {
   skippingTimeBtn.addEventListener('click', skipTime);
});

rangeInputs.forEach(range => {
   range.addEventListener('mouseup', rangeUpdate);
});

progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', e => mousedown && scrub(e)); // Nice Trick

fullScreen.addEventListener('click', toggleFullScreen);