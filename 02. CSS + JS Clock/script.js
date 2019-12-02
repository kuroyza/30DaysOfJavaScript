(function () {

   const secondsHand = document.querySelector('.clock__hand--sec');
   const minutesHand = document.querySelector('.clock__hand--min');
   const hoursHand = document.querySelector('.clock__hand--hour');

   let oldTime = new Date().getSeconds();


   let currentSecDeg = new Date().getSeconds() * 6 + 90;
   let currentMinDeg = new Date().getMinutes() * 6 + 90;

   let currentHourDeg = (new Date().getHours() % 12) * 30 + 90;

   secondsHand.style.transform = `translateY(-50%) rotate(${currentSecDeg}deg)`;
   minutesHand.style.transform = `translateY(-50%) rotate(${currentMinDeg}deg)`;
   hoursHand.style.transform = `translateY(-50%) rotate(${currentHourDeg}deg)`;

   setInterval(() => {
      let currentTime = new Date();
      if (oldTime == currentTime.getSeconds()) return;

      oldTime = currentTime.getSeconds();

      timeChanged(currentTime);

   }, 500);

   function timeChanged(time) {

      currentSecDeg += 6;
      secondsHand.style.transform = `translateY(-50%) rotate(${currentSecDeg}deg)`;

      if (time.getSeconds() == 30) {
         currentMinDeg += 3;
         minutesHand.style.transform = `translateY(-50%) rotate(${currentMinDeg}deg)`;

         if (time.getHours() == 30) {
            currentHourDeg += 15;
            hoursHand.style.transform = `translateY(-50%) rotate(${currentHourDeg}deg)`;
         }
      } else if (time.getSeconds() == 0) {
         currentMinDeg += 3;
         minutesHand.style.transform = `translateY(-50%) rotate(${currentMinDeg}deg)`;

         if (time.getHours() == 0) {
            currentHourDeg += 15;
            hoursHand.style.transform = `translateY(-50%) rotate(${currentHourDeg}deg)`;
         }
      }
   }
})();