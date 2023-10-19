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

// const secretNumber = 7;
// let guess;
// let attempt = 0

// Do while loop

// do {
//     guess = parseInt(prompt("Guess the secret number (1-10):"));
//     attempt++
//     if (guess === secretNumber) {
//         console.log("You have guessed the lucky number")
//     } else {
//         if(guess < secretNumber) {
//             console.log("Try a higher number")
//         }else {
//             console.log("Try a lower number")
//         }
//         console.log("You suck at guessing!!!" + attempt + " Total attempt")
//     }
//
// } while (guess!== secretNumber)

// for-loops

// for (/*initialization/; /*condition*/; /*increment*/){
    // body
// }

for(let i = 10; i <=20; i++) {
    console.log(i)
}

// 'num += 5' is the same as 'num = num +5'
for (let i = 0; i < 100; i += 5) {
    console.log(i)
}

// Each character in a string is a (index = i)
let hello = "hello";
for (let i = 0; i <+ hello.length; i++) {
    console.log(hello[i])
}

for (let i = 0, j = 9; i < 10; i++, j--) {
    console.log("for loop iteration #" + "i = " + i + ',j= ' + j);
}

// Break and continue

for (let i = 0; i < 100; i += 5) {
    console.log(i)
    // break;
    // console.log("snippet never reached");
}

for (let i = 0; i < 100; i += 5) {
    console.log(i)
    if(i === 50) {
        break;
    }
}
console.log("Trying to break out of loop")

// Continue - "skip"

for (let i = 1; i<=5; i++) {
    if(i === 3) {
        continue;
    }
    console.log(i)
}

// Everytime I come to a even number im skipping over it, thats why only odd numbers populate. If changed to (i % 2 === 1) or (i % 2 !== 0) you will be skipping over odd numbers and only populate even numbers.

for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log('Here is a lovely odd number ' + i);
}