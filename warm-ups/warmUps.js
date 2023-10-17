//T-Asia Fries
//Daily Warm-Ups
let name = "T-Asia Fries"
let year = "2015"
console.log(`My name is ${name} and I graduated highschool in ${year}`)

//Daily warm-up
//10.17
//Create a function called largestNum, where they take in 3 numbers as input and send back the largest out of the three numbers.

let num1 = 2
let num2 = 4
let num3 = 6

console.log(Math.max(num1,num2,num3));

////

function largestNum (num1,num2,num3) {
    return Math.max(num1,num2,num3) + " " + 'is the greatest';
}

console.log(largestNum(num1,num2,num3));

