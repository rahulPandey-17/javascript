"use strict";

// array declaration
// const nums = [10, 20, 40, 50, 60];

// another way to declare a array
let stadiums = new Array("Eden-Gardens", "WACA", "Wankhede", "GABBA");

// console.log(nums);
// console.log(stadiums);

// basic array methods

// length
// console.log(stadiums.length);

// push()
stadiums.push("Lords");
// console.log(stadiums);

// pop(), removes last element of the array
stadiums.pop();
// console.log(stadiums);

// unshift(), inserts values at the starting of the array
stadiums.unshift("MCG");
// console.log(stadiums);

// shift(), removes the value at the starting index of the array
stadiums.shift();
// console.log(stadiums);

// includes()
// console.log(stadiums.includes("GABBA"));

// indexOf()
// console.log(stadiums.indexOf("Wankhede"));

// join(), joins the array elements with the specified argument and returns a string
// console.log(stadiums.join(" **** "));

// slice()
console.log("Original array before slice :", stadiums);
console.log("On slice operation :",stadiums.slice(1, 3));
console.log("Array after slice :",stadiums);

// splice()
console.log("Original array before splice :", stadiums);
console.log("On splice operation :",stadiums.splice(1, 3));
console.log("Array after splice :",stadiums);

/* Important note */
/*
 * slice() does not change the original array
 * splice() changes the original array
*/