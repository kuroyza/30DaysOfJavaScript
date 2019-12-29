let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {

   clearInterval(countdown);

   const now = Date.now();
   const then = now + seconds * 1000;

   displayTimeLeft(seconds);
   displayEndTime(then);

   countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);


      if (secondsLeft < 0) {
         clearInterval(countdown);
         return;
      };

      displayTimeLeft(secondsLeft);

   }, 1000);


}


function displayTimeLeft(seconds) {
   const minutes = Math.floor(seconds / 60);
   const remainderSeconds = seconds % 60;
   const display = `${convertToTwoDigits(minutes)}:${convertToTwoDigits(remainderSeconds)}`;

   document.title = display;

   timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
   const end = new Date(timestamp);
   const hour = end.getHours();
   const adjustedHour = hour > 12 ? hour - 12 : hour;
   const minutes = end.getMinutes();

   endTime.textContent = `Be Back At ${convertToTwoDigits(adjustedHour)}:${convertToTwoDigits(minutes)}`;
}

function convertToTwoDigits(value) {
   return value >= 10 ? value : `0${value}`;
}

function startTimer() {
   const seconds = parseInt(this.dataset.time);
   timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e){
   e.preventDefault();
   const mins = this.minutes.value * 60;
   timer(mins);
   this.reset();
});