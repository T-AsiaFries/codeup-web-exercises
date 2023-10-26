"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// 1. isNegative

function isNegative(input) {
    if (input !== 'number') {
        return true;
    } else if (input <= 0) {
        return false;
    }
}

//function isNegative(num) {
// return num < 0;
//}

// 2. isTen

function isTen(input) {
    if (input === 10) {
        return true;
    } else if (input !== "") {
        return false;
    }
}

// function isTen(num) {
// return num === 10;
//}

// 3. double

function double(input) {
    return input * 2
}

// try to use the verbiage they give you in the question for parameters!

// 4. remove9s

function remove9s(arr) {
    for (let i = 0; i < arr; i++) {
        if(arr !== 9) {
        }
    }
    return arr.filter(num => num !== 9);
}

// function remove9s(num) {
//     let resultArr = [];
//     if (num[i] !== 9) {
//         resultArr.push(num[i]);
//     }
//     return resultArr;
// }

// 5. average

function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}

// same example as what I did

// 6. countOdds

function countOdds(arr) {
    let oddNumbers = 0;
    for (let i = 0; i < arr; i++) {
        if (arr % 2 === 1) {
            oddNumbers.add(arr);
        }
    }
    return oddNumbers;
}

// function countOdds(arr) {
//     let oddNumbers = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 !== 0) {
//             oddNumbers++
//         }
//     }
//     return oddNumbers;
// }

// 7. averageSales

function averageSales(arr) {
    let average = 0;
    let sales = 0;
    for (let i = 0; i < arr.length; i++) {
        average = sales + arr[i];
    }
    return average / arr.length;
}

// function averageSales(arr) {
//     let totalSales = 0;
//     for(let i = 0; i < arr.length; i++) {
//         totalSales += arr[i].sales
//     }
//     return totalSales / arr.length
// }

// 8. convertNameToObject

function convertNameToObject(str) {
    return `${str.firstname} ${str.lastname}`;
}

// Objects will always have curly braces

// let str = "Johnny Martinez"

// function convertNameToObject(fullName) {
//     let name = fullName.split(' '); =["Johnny", "Martinez"]
//     return {firstName: name[0], lastName: name[1]};
// }

// 9. countVowels
function countVowels(str) {
    let vowelCount = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
            vowelCount += 1;
        }
    }
    return vowelCount;
}

// same example as what I did

// 10. analyzeWord

function analyzeWord(input) {
    let word = input
    let numberOfLetters = input.length;
    let numberOfVowels = countVowels(input);
    return input + numberOfLetters + numberOfVowels
}

// function analyzeWord(str) {
//     return {
//         word: str,
//         numberOfLetters: str.length,
//         numberOfVowels: countVowels(str);
//     }
// }

// 11. capitalizeName

function capitalizeName(str) {
    let name = fullName.split(' ');
}

// function capitalizeName(str) {
//     let name = convertNameToObject(str);
//     return name.firstName.charAt(0).toUpperCase() + name.firstName.slice(1) + " " + name.lastName.charAt(0).toUpperCase() + name.lastName.slice(1)
// }

// Another example with a substring

// function capitalizeName(str) {
//     let strArr = str.split(' ');
//     for (let i = 0; i < str.length; i++) {
//         strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1);
//     }
//     return strArr.join(' ');
// }
