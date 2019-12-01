document.addEventListener('keydown', e => {
   
   // Get Pressed Key
   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

   // Get relevent audio to the Pressed Key
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

   // Check the key exists
   if(!key) return;
   
   // add Css style to the pressed Key
   key.classList.add('playing');

   // get keys sound source
   const audioSrc =  audio.getAttribute('src');

   // Create new Audio
   let audioSound = new Audio(audioSrc);

   // Play the new audio
   audioSound.play();

   // Remove styling after 200ms
   setTimeout(() => {
      key.classList.remove('playing');
   }, 100);
});