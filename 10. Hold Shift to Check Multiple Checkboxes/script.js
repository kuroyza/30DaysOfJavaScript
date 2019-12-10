let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
let lastCheckedBox = -1;
let shiftHolded = false;

checkBoxes.forEach((checkBox, i) => {
   let index = i + 1;

   checkBox.addEventListener('click', e => {
      if(e.target.checked && shiftHolded && lastCheckedBox != -1){
         if(index == lastCheckedBox || lastCheckedBox == -1) return;

         if(index < lastCheckedBox) checkBoxexIncremently(index+1);
         else if(index < lastCheckedBox) checkBoxexDecremently(index+1);
      }

      if(e.target.checked) lastCheckedBox = index;
   });
});

function checkBoxexIncremently(index){

   while(index < lastCheckedBox){
      let tempCheckbox = document.querySelector(`.item:nth-of-type(${index}) input`);
      tempCheckbox.checked = true;

      index++;
   }
}


function checkBoxexDecremently(index){

   while(index > lastCheckedBox){
      let tempCheckbox = document.querySelector(`.item:nth-of-type(${index}) input`);
      tempCheckbox.checked = true;

      index--;
   }
}

window.addEventListener('keydown', e => {
   if (e.keyCode == 16 && !shiftHolded) {
      shiftHolded = true;
   }
});

window.addEventListener('keyup', e => {
   if (e.keyCode == 16 && shiftHolded) {
      shiftHolded = false;
   }
});