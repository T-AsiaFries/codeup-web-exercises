"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

let analyzeColor = (color) => {
    if (color === 'blue') {
        return ('Blue is my favorite color too');
    } else if (color === 'red') {
        return ('Apples are red')
    } else {
        return `I dont know anything about ${color}`
    }
}


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// function analyzeColor(color) {
//     console.log(color);
// }
// analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


// function newColor(color) {
//     switch (newColor) {
//         case ("red"):
//             return "Red is red"
//         case ("blue"):
//             return "Is a primary color"
//         default:
//             return "I dont care for that color" + color;
//     }
// }


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let color = prompt('What is your favorite color?')
alert(analyzeColor(color));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(num, total) {
    switch (num) {
        case 0:
            return total;
        case 1:
            return total - 0.1 * total
        case 2:
            return total - 0.25 * total
        case 3:
            return total - 0.35 * total
        case 4:
            return total - 0.50 * total
        case 5:
            return 0
        default:
            return "Invalid lucky number, please enter a lucky number between 0 and 5"
    }
}

calculateTotal(4, 100);

console.log(calculateTotal(4, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
//
// let num1 = parseFloat(prompt('What is your total bill?'));
//
// //Concatenation
//
// alert(" Your lucky number is " + luckyNumber + " Your total before discount " + num1 + " Your total after discount " + calculateTotal(luckyNumber, num1))
//
// //Template literals
//
// alert(`Your lucky number is: ${luckyNumber}, Your total before discount ${num1} Your total after the discount $${parseFloat(calculateTotal(luckyNumber, num1)).toFixed(2)


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let userConfirm = confirm("Do you want to enter a number")

if (userConfirm) {
    let userInput =parseFloat(prompt('Enter a number please'));
    if (isNaN(!userInput)) {
        alert("You didnt input a number");
    } else {
        alert(isEvenOdd(userInput))
        alert(add100(userInput))
        alert(isPos(userInput))
    }
}

//Even or odd function
function isEvenOdd(num) {
    if (num === 0) {
        return num + " " + ' is neither even or odd'
    } else if (num % 2 === 0) {
        return num + " " + ' is a even number'
    } else if (num % 2 === 1) {
        return num + " " + ' is a odd number'
    }
}

//Add 100 function
function add100(num) {
    return num + 100
}

//Is positive function
function isPos(num) {
    if (num > 1) {
        return num + " " + ' is a positive number'
    } else {
        return num + " " + ' is a odd number'
    }
}

