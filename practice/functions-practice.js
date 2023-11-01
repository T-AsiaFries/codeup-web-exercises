// Function Drills

// Functions using conditionals but NOT loops or arrays:

// Make a function named isOdd(number)

function isOdd(num) {
    return num % 2 === 1;
}

console.log(isOdd(5))

// Make a function named isEven(number)

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(8));

// Make a function named identify(input) that returns the input exactly as provided.

function identify(input) {
    return input;
}

console.log(identify(47));

// Make a function named isFive(input)

function isFive(input) {
    if (input === 5) {
        return true;
    } else {
        return false;
    }
}

console.log(isFive(5));

// Make a function named addFive(input) that adds five to some input.

function addFive(input) {
    return input + 5;
}

console.log(addFive(25));

// Make a function named isMultipleOfFive(input)

function isMultipleOfFive(input) {
    return input % 5 === 0;
}

console.log(isMultipleOfFive(24));

// Make a function named isThree(input)

function isThree(input) {
    return input === 3;
}

console.log(isThree(3));

// Make a function named isMultipleOfThree(input)

function isMultipleOfThree(input) {
    return input % 3 === 0;
}

console.log(isMultipleOfThree(30));

// Make a function named isMultipleOfThreeAndFive(input)

function isMultipleOfThreeAndFive(input) {
    return input % 3 === 0 && input % 5 === 0;
}

console.log(isMultipleOfThreeAndFive(30));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n

function isMultipleOf(target, n) {
    return target % n === 0;
}

console.log(isMultipleOf(27,9));

// Make a function named isTrue(boolean)

function isTrue(input) {
        return true;
}

console.log(isTrue());

// Make a function named isFalse(boolean)

function isFalse(input) {
    return false;
}

console.log(isFalse());
console.log('hey')

// Make a function named isTruthy(input), remember that values other than true will behave like true





// Make a function named isFalsy(input), remember that values other than false behave like false




// Make a function named isVowel(letter)

function isVowel(letter) {
    return true;
}

console.log(isVowel());
// Make a function named isConsonant(letter)

function isConsonant(letter) {
    return true;
}

console.log(isConsonant());

// Make a function named isCapital(letter)

function isCapital(letter) {
    return letter.charAt(0).toUpperCase();
}

console.log(isCapital('h'));

// Make a function named isLowerCase(letter)

function isLowerCase(letter) {
    return letter.charAt(0).toLowerCase();
}

console.log(isLowerCase('K'));

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter




// Make a function named isSpace(letter) that returns if a character is a space character



// Make a function named isZero(number)

function isZero(number) {
    if (number === 0) {
        return true;
    }
}
console.log(isZero(0));

// Make a function named notZero(input) that returns true if the input is not zero

function notZero(input) {
    if (input !== 0) {
        return true;
    }
}

console.log(notZero(6));

// Write a function named lowerCase(string)

function lowerCase(string) {
    return string.toLowerCase();
}

console.log(lowerCase('FRIES'));

// Write a function named double(n) that returns a number times two

function double(n) {
    return n * 2;
}

console.log(double(12));

// Write a function named triple(n) that returns a number times 3

function triple(n) {
    return n * 3;
}

console.log(triple(9));

// Write a function named quadruple(n) that returns a number times 4

function quadruple(n) {
    return n * 4;
}

console.log(quadruple(8));

// Write a function named half(n) that returns 1/2 of the provided input

function half(n) {
    return n / 2;
}

console.log(half(60));

// Write a function named subtract(a, b) that returns a minus b

function subtract(a, b) {
    return a - b;
}

console.log(subtract(125,50));

// Write a function named multiply(a, b) that returns the product of a times b

function multiply(a, b) {
    return a * b
}

console.log(multiply(34,40));

// Write a function named divide(a, b) that returns a divided by b

function divide(a, b) {
    return a / b;
}

console.log(divide(56,8));

// Write a function named remainder(a, b) that returns the remainder after dividing a by b

function remainder(a, b) {
    let remainder = a / b;
    return remainder;
}

console.log(remainder(4,2));

// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b

function modula(a, b) {
    let sum = a / b;
    return sum;
}

console.log(modula(8, 2));

// Write a function named cube(n) that returns n * n * n

function cube(n) {
    return n * n * n;
}

console.log(cube(4));

// Write a function named squareRoot(n) that returns the square root of the input

function squareRoot(n) {
    return Math.sqrt(n)
}

console.log(squareRoot(2));


// Write a function named cubeRoot(n) that returns the cube root of the input

function cubeRoot(n) {
    return Math. cbrt(n)
}

console.log(cubeRoot(56));
console.log("here")

// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.

// function invertSign(number) {
//       -Math.abs(number) --> will make a positive number negative.
//        Math.abs(number) --> will make a negative number positive
// }
//
// console.log(invertSign());

// Write a function named degreesToRadians(number)

function degreesToRadians(number) {
    let pi = Math.pi;
    return number * (pi/180);
}

// Write a function named radiansToDegrees(number)

function radiansToDegrees(number) {
    let pi = Math.pi;
    return number * (180/pi);
}

// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.



// Make a function named trim(string) that removes empty spaces before and after the input.



// Make a function named areEqual(input1, input2) that returns if both inputs have the same value

function areEqual(input1, input2) {
    return input1 === input2;
}

console.log(areEqual(8, 9));

// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.

function areIdentical(input1, input2) {
    if (input1 === input2) {
        return input1 && input2;
    } else {
        return false;
    }
}

console.log(areIdentical('citlali','citlali'));


// Make a function named not(input) returns the input with a flipped boolean

function not(input) {
    return !input;
}

console.log(not('hello'));

// Make a function named notNot(input) that the negation of the negation of the input.

function notNot(input) {
    return !!input;
}

console.log(notNot('hello'));

// Make a function named and(predicate1, predicate2) that returns the logical operation of AND

function and(pred1, pred2) {
    return pred1 && pred2;
}

console.log(and('yes', 'no'));

// Make a function named or(predicate1, predicate2) that returns the logical operation of OR

function or(predicate1, predciate2) {
    return predicate1 || predicate2
}

console.log(or('maybe', 'guess'));

// Write a function called reverseString(string) that reverses a string

function reverseString(str) {
    let reverseString = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}

console.log(reverseString('america'));

// Make a function named absoluteValue(number) that returns the absolute value of a number.

function absoluteValue(number) {
    return Math.abs(number);
}

console.log(absoluteValue(5));

// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.

// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

///////////////////////////////////////////////////////////////

//     Simple Function Drills

// Make a function called returnTwo() that returns the number 2 when called

function returnTwo(input) {
    return input === 2;
}

// Test this function with console.log(returnTwo())

console.log(returnTwo(2));

// Make a function called sayHowdy() which console.logs the string “Howdy!”

function sayHowdy(str) {
    return str
}

// Test this function by directly calling sayHowdy()

console.log(sayHowdy("Howdy!"));


// Remember this function does not need a defined return value

// Make a function called returnName() that returns the string of your name

function returnName(str) {
    return str
}

// Test this function with console.log(returnName())

console.log(returnName("T-Asia"));

// Make a function called addThree() which takes in a number input and returns the number plus 3.

function addThree(num) {
    return num + 3;
}

// Test this function with console.log(addThree(5))

console.log(addThree(5));

// Make a function called sayString() which returns the string input passed in.

function sayString(input) {
    return input
}

// Test this function with console.log(sayString('codeup'))

console.log(sayString('codeup'));

///////////////////////////////////////////////////////////////

//     Challenge Function Drills

// Write a function called identity(input) that takes in an argument called input and returns that input.

function identity(input) {
    return input;
}

console.log(identity(56));

// Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.



// Write a function called first(input) that returns the first character in the provided string.

function first(input) {
    return input.charAt(0);
}

console.log(first("hello"));

// Write a function called last(input) that returns the last character of a string

function last(input) {
    return input.charAt(6)
}

console.log(last("goodbye"));

// Write a function called rest(input) that returns everything but the first character of a string.

function rest(input) {
    return input.slice(1)
}

console.log(rest("hello"));

// Write a function called reverse(input) that takes a string and returns it reversed.

function reverse(input) {
    return input.split('').reverse().join('')
}

console.log(reverse("time"));

// Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.

function isNumeric(input) {
    return !isNaN(input);
}

console.log(isNumeric("5"));

// Write a function called count(input) that takes in a string and returns the number of characters.

function count(str) {
    return str.length;
}

console.log(count("sonder"));

// Write a function called add(a, b) that returns the sum of a and b

function add(a, b) {
    return a + b
}

console.log(add(7, 6));

// Write a function called subtract(a, b) that return the difference between the two inputs.

function subtract(a, b) {
    return a - b;
}

console.log(subtract(50, 32));

// Write multiply(a, b) function that returns the product

function multiply(a, b) {
    return a * b
}

console.log(multiply(40, 2));

// Write a divide(numerator, denominator) function that returns a divided by b

function divide(numerator, denominator) {
    return numerator / denominator;
}

console.log(divide(56, 8));

// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor

function remainder(number, divisor) {
    return number / divisor;
}

console.log(remainder(60, 10));

// Write the function square(a) that takes in a number and returns the number multiplied by itself.

function square(a) {
    return a * a;
}

console.log(square(25));

// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators



// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.



///////////////////////////////////////////////////////

// Even More Function Bonuses

// Create a function that will return how many whitespace characters are at the beginning and end of a string.



// Create a function that takes in two string inputs.



// If the second string input is present in the first, return the first input string with the second input string removed from it.



// If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.



// If the second string input is not present in the first, return the first string as entered in the function.



// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).



// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).




// Create a function returnTrueMessage() that returns the string "Hey, it's true!"



// Create a function returnFalseMessage() that returns the string "Hey, it's false!"



// Create a function returnMessage() that takes in a function and returns the call to the function



// Experiment passing in different functions.

//     Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.



// The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.


