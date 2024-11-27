"use strict";

let score = "56";
// console.log(typeof score);

// string to number conversion

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

/*
 * Some common expected outputs when we try to convert some other data-type to number
 *
 * string to number : NaN
 * null to number : 0
 * undefined to number : NaN
 * boolean to number : for true-1 and for false-0
 * string in a number format to number : corrosponding number
*/

/* conversion to boolean */

// 1
console.log(Boolean(1));

// 0
console.log(Boolean(0));

// empty string
console.log(Boolean(""));

// string
console.log(Boolean("Rahul"));

/* number to string */
console.log(typeof String("100"));