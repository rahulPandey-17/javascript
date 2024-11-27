"use strict";

/* *********Conversion********* */

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
// console.log(Boolean(1));

// 0
// console.log(Boolean(0));

// empty string
// console.log(Boolean(""));

// string
// console.log(Boolean("Rahul"));

/* number to string */
// console.log(typeof String("100"));


/* **********Operations********** */

let value = 10;
let negativeValue = - value;
console.log(negativeValue);

let str1 = "hello";
let str2 = ", Rahul";
console.log(str1 + str2);

/* string and number addition */

// if string is the first value then the entire thing will be coverted to string
console.log("1" + 0 + 0);

// if numbers are first then noraml operations will be performed and then it is concatenated with string whenver a string is encountered
// if a number is added to a string the whole thing becomes a string
console.log(2 + 8 + "2" + 4);