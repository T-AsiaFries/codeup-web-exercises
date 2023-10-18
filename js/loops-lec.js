// While loop (function and syntax)
// Passing the condition

// let i = 0;
//
// while(i < 10) {
//     console.log(i);
//     i++
// }

// Do while loops
// No matter the condition your body will run once

// let i = 12;
//
// do {
//     console.log(i);
//     i++
// } while(i < 15)

// IF BROWSER/COMPUTER STUCK ON INFINITE LOOP
// to exit
// DO (Command + Option + ESC)
//OR shutdown your computer using the physical button

// Mini exercise
// Create a variable called num that is equal to 0;
// Write a while loop that increment "num" by 5 so long as num is less than 100
// Do the same thing with do-while

// While

// let num = 0;
//
// while(num < 100) {
//     console.log(num+=5);
// }

// Do while

// let num = 0;
//
// do {
//     console.log(num+=5);
// } while(num < 100)
//
//(While) only takes the condition
//(Do) takes everything else

const secretNumber = 7;
let guess;
let attempt = 0

// Do while loop

do {
    guess = parseInt(prompt("Guess the secret number (1-10):"));
    attempt++
    if (guess === secretNumber) {
        console.log("You have guessed the lucky number")
    } else {
        if(guess < secretNumber) {
            console.log("Try a higher number")
        }else {
            console.log("Try a lower number")
        }
        console.log("You suck at guessing!!!" + attempt + " Total attempt")
    }

} while (guess!== secretNumber)