/* In official js documentation data-types are divided into two catogries */

// primitive, which includes the following
/*
 * 1. number
 * 2. string
 * 3. boolean
 * 4. null
 * 5. undefined
 * 6. symbol
 * 7. BigInt(to store large values)
*/

// symbol is used to provide a unique value

let id = Symbol("123");
let anotherId = Symbol("123");

console.log(id === anotherId);  // will give false, as symbol always provides unique values

// reference(non-primitive)
/*
 * 1. array
 * 2. object
 * 3. function
*/

// array
const bands = ["Metallica", "Judas Priest", "Motorhead", "Iron Maiden"];

// object
let myInfo = {
    name : "Rahul Pandey",
    age : 24,
};

// function
function welcome() {
    console.log("Hello, World!");
}

/* Javascript is a dynamically typed language */