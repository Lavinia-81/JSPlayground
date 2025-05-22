// ----------------------------------------
// VARIABLES: Declaring variables with var, let, and const
// ----------------------------------------

var oldVar = "This is a var variable"; // var has function scope
let modernVar = "This is a let variable"; // let has block scope
const constantVar = "This is a const variable"; // const cannot be reassigned

console.log(oldVar, modernVar, constantVar);

// ----------------------------------------
// FUNCTIONS: Named, anonymous, and built-in functions
// ----------------------------------------

// Named function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Maria"));

// Anonymous function assigned to a variable
const anonymousFunction = function() {
    console.log("This is an anonymous function.");
};
anonymousFunction();

// Built-in function example (Math function)
console.log(Math.sqrt(25)); // Finds square root of 25

// ----------------------------------------
// CONDITIONAL STATEMENTS: if/else and switch
// ----------------------------------------

let number = 10;

// if/else conditional statement
if (number > 5) {
    console.log("Number is greater than 5.");
} else {
    console.log("Number is 5 or less.");
}

// switch statement
let color = "red";
switch (color) {
    case "blue":
        console.log("Color is blue.");
        break;
    case "red":
        console.log("Color is red.");
        break;
    default:
        console.log("Color is unknown.");
}

// ----------------------------------------
// ARRAYS: Arrays of different data types
// ----------------------------------------

let numberArray = [1, 2, 3, 4, 5];
let stringArray = ["apple", "banana", "cherry"];
let mixedArray = [true, 42, "hello", null];

console.log(numberArray, stringArray, mixedArray);

// ----------------------------------------
// LOOPS: Looping through an array
// ----------------------------------------

// Loop through an array using forEach
numberArray.forEach(function(num) {
    console.log("Number:", num);
});

// Loop through an array using for loop
for (let i = 0; i < stringArray.length; i++) {
    console.log("Fruit:", stringArray[i]);
}