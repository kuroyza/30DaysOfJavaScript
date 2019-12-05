let panelsArr = document.querySelectorAll('.panel');

panelsArr.forEach(panel => {
   panel.addEventListener('click', function() {
      closeAllOpenedPanels(this);
      this.classList.toggle('open');
      this.classList.toggle('open-active');
   });
});

function closeAllOpenedPanels(clickedPanel) {
   panelsArr.forEach(panel => {
      if(panel != clickedPanel) panel.classList.remove('open', 'open-active');
   });
}
