"use strict";

// const myDate = new Date();
// console.log(myDate);

// for a better format we can use toString() with date
// console.log(myDate.toString());

// some other methods that we can use with date are as follows

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());

// we can also create custom dates
// const myBirthday = new Date(2000, 4, 17);
// console.log(myBirthday.toDateString());

// time stamp
// const myTimeStamp = Date.now() // it will give output in milliseconds since the epoch(1st Jan 1970)
// console.log(myTimeStamp);

// to convert milliseconds to seconds
// const currentTime = Date.now();
// console.log(Math.floor(currentTime / 1000));

// some basic date methods
const currentDate = new Date();

console.log(currentDate.getMonth());
console.log(currentDate.getFullYear());
console.log(currentDate.getDay());