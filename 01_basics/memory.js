// stack vs heap

/*
 * primitive type uses stack memory
 * copy of the variable is given to stack not the original
*/

/*
 * non-primitive type uses heap
 * direct reference(memory address) will be provided by the heap
*/

// if we change anything in the copy of a primitive data-type, original value remains the same

let numberOne = 100;
let numberTwo = numberOne;
numberTwo = 200;

console.log(numberOne);
console.log(numberTwo);

// if we change anything in the copy of a reference data-type, original value will also change

const myInfo = {
    email : "rahul.r@.com",
    age : 24,
}

const info = myInfo;
info.email = "r@r.com";

console.log(myInfo.email);
console.log(info.email);