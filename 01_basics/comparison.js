"use strict";

// console.log("2" > 1);  // in this case js implicitly converted 2 into a number (this implicit conversion is known as type-coercion)

/* There are some unusual behaviour observed when comparsion operators are used with null */

// console.log(null > 0);   // false
// console.log(null == 0);  // false
// console.log(null >= 0);  // true

/*
 * The above odd behaviour happens due to the following reason
 * The equality check(==) and comparison operators(<,>,<=,>=) works differently in case of null
 * comparison operators null to a number and treat it as 0, that's why we get
 * null > 0 as false and null >= 0 as true
*/

/* In case of undefined it will give false for all the comparison operators */

// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);
// console.log(undefined < 0);

/* **********Important*********** 
 * Avoid using comparison operators with different data-types as it can give unsusal outputs
 * Avoiding these types of comparisons are considered as good practice in javascript
*/

// we can use strict check for equality (is also checks for data-types as well)
console.log("10" === 10);