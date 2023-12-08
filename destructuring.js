/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 26, 24];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let[john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects

let jobs = {
  mike: 'designer',
  jill: 'developer',
  alicia: 'accountant'
}
let{mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"];
let[johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let[, , maryNative, marySecondary] = languages; //Skiping values using " , "
console.log(maryNative, marySecondary);  

let languages2 = {
  firstLanguages: "english",
  secondLanguages: "french",
  thirdLanguages: "german",
  fourthLanguages: "japanese",
};

let{ firstLanguages, thirdLanguages} = languages2;
console.log( firstLanguages, thirdLanguages);

// Using rest parameter syntax

let fruits = ["apple","orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
  brian: "steak",
  anna: "pasta",
  sarah: "vegetarian",
  andreea: "pizza"
};
let{brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);

// EXERCISES 

let students = [
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'John',
      subjects: ['art', 'cad', 'english', 'maths', 'science'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, maths: 77, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

const makeList = (arr, student) => {
const student1 = arr.find((s) => s.name === student);
return student1 ? student1.subjects : [];
};
let [first, second, ...rest1] = makeList(students, 'John');

console.log(first, second, ...rest1);

