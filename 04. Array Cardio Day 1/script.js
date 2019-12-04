// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [{
      first: 'Albert',
      last: 'Einstein',
      year: 1879,
      passed: 1955
   },
   {
      first: 'Isaac',
      last: 'Newton',
      year: 1643,
      passed: 1727
   },
   {
      first: 'Galileo',
      last: 'Galilei',
      year: 1564,
      passed: 1642
   },
   {
      first: 'Marie',
      last: 'Curie',
      year: 1867,
      passed: 1934
   },
   {
      first: 'Johannes',
      last: 'Kepler',
      year: 1571,
      passed: 1630
   },
   {
      first: 'Nicolaus',
      last: 'Copernicus',
      year: 1473,
      passed: 1543
   },
   {
      first: 'Max',
      last: 'Planck',
      year: 1858,
      passed: 1947
   },
   {
      first: 'Katherine',
      last: 'Blodgett',
      year: 1898,
      passed: 1979
   },
   {
      first: 'Ada',
      last: 'Lovelace',
      year: 1815,
      passed: 1852
   },
   {
      first: 'Sarah E.',
      last: 'Goode',
      year: 1855,
      passed: 1905
   },
   {
      first: 'Lise',
      last: 'Meitner',
      year: 1878,
      passed: 1968
   },
   {
      first: 'Hanna',
      last: 'Hammarström',
      year: 1829,
      passed: 1909
   }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let inventors1500s = inventors.filter(inventor => (inventor.year / 100 | 0) == 15);
console.table(inventors1500s);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
let inventorsFullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(inventorsFullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
inventors.sort((inventor1, inventor2) => inventor1.year - inventor2.year);
console.table(inventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
let inventorsLive = inventors.reduce((accumulator, inventor) => accumulator + (inventor.passed - inventor.year), 0);
console.log(`The total is: ${inventorsLive}`);

// 5. Sort the inventors by years lived
inventors.sort((inventor1, inventor2) => (inventor1.passed - inventor1.year) - (inventor2.passed - inventor2.year));
console.table(inventors);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// NOTE: This will only work on the console of the site above
let links = document.querySelectorAll('.mw-category a');

let listOfBoulevardsInParis = Array.prototype.filter.call(links, link => link.innerHTML.includes('de'));
console.log(listOfBoulevardsInParis);

// 7. sort Exercise
// Sort the people alphabetically by last name

inventors.sort((inventor1, inventor2) => {
   if (inventor1.last < inventor2.last) return -1
   if (inventor1.last > inventor2.last) return 1;
   return 0;
});
console.table(inventors);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

let dataSum = data.reduce((obj, currentValue) => {
   if(!obj[currentValue])
      obj[currentValue] = 0;
   obj[currentValue]++;

   return obj;
}, {});

console.table(dataSum);