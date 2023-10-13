"use strict";

//Create a function named sum that takes in two numbers and returns the sum of the two numbers.

//Function Declaration
function sum(num1,num2){
    return num1 + num2;
}
//Calling the function / Execute the function.
console.log(sum(5,5));

//If you only call (console.log) the name without the function it would just tell me the function definition.

//Arguments give parameters values

//Create a function named fullName that takes in two inputs, a first and a last name,, and returns the first and last name concatenated together.

function fullName(firstName,lastName){
    return firstName + " " + lastName;
}

console.log(fullName("t-Asia","fries"));

//Refactor with Template Literals
// function fullName(firstName,lastName)
//     return `${firstName} ${lastName}`
    //this will never urn due to our return statement being executed before the console.log()
    //console.log(`Function has finished!`);


console.log(`Hello ${fullName(`T-Asia`,`Fries`)}, did you know that 5 + 5 = ${sum(5,5)}`);

//Anonymous function /Function expression

const decrement = function(input) {
    return input - 1;
}

console.log(decrement(5));

// function fullName(firstName,lastName){
//     return firstName + " " + lastName;
// }

//Arrow function /Function expression (special type)

//Longer arrow function
// const fullName = (firstName, lastName) => {
//     return firstName + " " + lastName;
// }

//Shorter arrow function

// const fullName = (firstName, lastName): =>firstName + " " + lastName;

//If a arrow function only has 1 parameter, parenthesis are optional!
const myFullName = nameStr => nameStr;
console.log(myFullName(`T-Asia Fries`));

// console.log(fullName(`Micahel`,`Meyers`));

//An argument is the value that a function is called with.
//A parameter is part of the functions definition.

//Create a function that takes in a string and transforms the string into lowercase.
//
let sampleString = "HoW oN eArTh doEs thIs wOrK?"
sampleString.toLowerCase();
// //Function declaration
//
// function lowerCaseString(str) {
//     sampleString = str.toLowerCase();
// }
// lowerCaseString(sampleString);
//


//Arrow function

const lowerCaseString = (str) => {
    str.toLowerCase()
};

console.log(sampleString)
lowerCaseString(sampleString);
console.log(lowerCaseString(sampleString));
console.log(sampleString);

function increment(num){
    return num + 1
}

//Cannot log a value if nothing is returned , the result would be undefined.

console.log(increment(5));

function greeting(greeting= `Howdy!`) {
    return greeting;
}

console.log(greeting());
console.log(greeting(`Greetings!`));

//Function scope (if its in curly braces it can be accessed)

let globalVar = "Hello! My name is Globie!"

function test() {
    let localVar= `Hello, my name is Lola`;
    console.log(localVar);
    {
        let innerVar = `Nested Var!`
        console.log(innerVar);
    }
    console.log(globalVar);
}

test();

let x = 300;
let y = 100;

function scopeExample() {
    let x = 1;
    let y = 2;
    console.log(`x: ${x} y: ${y}`); // x: 1 y: 2
    return x + y;
}

console.log(`x: ${x} y: ${y}`); // x: 300 y: 100
let returnValue = scopeExample();
console.log(returnValue); // 3

