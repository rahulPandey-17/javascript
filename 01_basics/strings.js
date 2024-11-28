const name = "Rahul Pandey";
const age = 24;

// string interpolation
// console.log(`My name is ${name}, and I am ${age} years old.`);

// another way of decalring a string
const gameName = new String("Akagami");
// console.log(gameName);
// console.log(gameName.__proto__);

/* string functions */

// length
console.log("rahul".length);

// toUpperCase()
console.log("rahul".toUpperCase());

// charAt()
console.log("rahul".charAt(3));

// indexOf()
console.log("rahul".indexOf('l'));

// substring()
console.log("cricket".substring(1, 6));

// slice()
console.log("adelaid".slice(1, 5));

// trim()
console.log("   perth   ".trim());

// replace()
// it will only replace the first instance encountered
console.log("googly".replace('g', 'e'));

// if you want to replace all the instances use replaceAll() instead
console.log("googly".replaceAll('g', 'o'));

// includes()
console.log("rahul".includes("h"));

// split()
const words = "i-love-cricket".split("-");
console.log(words);