const fast = ["c", "c++", "java"];
const slow = ["javascript", "python", "ruby"];

/* important note */
// if we push an entire array to another array like below
// fast.push(slow);
// console.log(fast); // it will take the enitre array as an element

// instead we can use concat() to merge arrays properly
// const allLanguages = fast.concat(slow); // concat() returns a new array, so it is better to store it in a variable
// console.log(allLanguages);

/* but the most commonly used and recommended method for combining arrays is to use spread operator */
const allLanguages = [...fast, ...slow];
// console.log(allLanguages);

// flat()
const messyArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]];
const simpleArray = messyArray.flat(3);
// console.log(simpleArray);

// convert a data-type to array

const testCase = "Rahul";
const convertedArray = Array.from(testCase); // converts to array(returns a new array)
// console.log(convertedArray);

// Array.of()
const score1 = 100;
const score2 = 200;
const score3 = 300;

const combinedNumbers = Array.of(score1, score2, score3);
console.log(combinedNumbers);