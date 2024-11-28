"use strict";

// interpreter automatically detecting the data-type
const score = 400;

// we are explicitly defining that it is a number
const balance = new Number(10000);

// console.log(score);
// console.log(balance);

/* we can use some functions on numbers */

// toString()
// console.log(balance.toString());

// toFixed(), allows you to decide how many values you want to show after decimal point
// console.log(12.2637484746.toFixed(2));

// toPrecision()
/*
 * it returns a string
 * it will show you the digits upto which you have mention the precision
 * after that if the no. of precise digits ends before decimal and there are still digits left before decimal it will show them in exponent format
 * if the digits are remaining after the decimal it will simply round them off
*/
// console.log(12345.543455778675.toPrecision(2));
// console.log(12345.546455778675.toPrecision(7));

// toLocaleString(), used for better representation of numbers
// by default it will give us format, to fetch output in any other foramt you have to specify that explicitly
const number = 10000000;
// console.log(number.toLocaleString("en-IN"));


/* *************** Maths *************** */

// abs()
// console.log(Math.abs(-400));

// round()
// console.log(Math.round(3.5));

// ceil()
// console.log(Math.ceil(4.1));

// floor()
// console.log(Math.floor(5.9));

// sqrt()
// console.log(Math.sqrt(100));

/* important function from Math library */
// random()
// console.log(Math.random());  // gives values b/w 0-1

/* important formula */

const min = 10;
const max = 20;

const finalValue = Math.floor(Math.random() * (max - min + 1) + min);
console.log(finalValue);