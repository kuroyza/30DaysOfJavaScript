const root = document.documentElement;
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
   input.addEventListener('input', e => {
      let target = e.target;

      root.style.setProperty(`--${target.name}`, `${target.value}${target.name != "color" ? "px" : ""}`);
   });
});