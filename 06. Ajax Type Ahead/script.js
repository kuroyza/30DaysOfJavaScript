const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];
const searchField = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(endpoint)
   .then(res => res.json())
   .then(data => [...data])
   .then(locations => {
      locations.forEach(location => {
         location.population = numberWithCommas(location.population);
         cities.push(location);
      });
   });

function findMatches(input) {
   return cities.filter(location => {
      const regex = new RegExp(input, 'gi');
      return location.city.match(regex) || location.state.match(regex);
   });
}

// From StackOverflow
function numberWithCommas(str) {
   return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function displayMatches() {
   if (this.value == '') {
      suggestions.innerHTML = '';
      return;
   }
   const matchedLocations = findMatches(this.value);
   const html = matchedLocations.map(location => {
      const regex = new RegExp(this.value, 'gi');

      const cityName = location.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = location.state.replace(regex, `<span class="hl">${this.value}</span>`);

      return `
      <li>
         <span class="name">${cityName}, ${stateName}</span>
         <span class="population">${location.population}</span>
      </li>
      `;

   }).join('');

   suggestions.innerHTML = html
}


searchField.addEventListener('keyup', displayMatches);