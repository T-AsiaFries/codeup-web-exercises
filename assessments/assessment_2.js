"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */
// 1. Write a function named checkForNumber that accepts an argument and returns a string 'number' or "not a number" based on whether the input is a number.

function checkForNumber(num) {
    if (typeof num === "number") {
        return "number";
    } else if (typeof num === "string") {
        return "not a number";
    } else {
        return "not a number";
    }
}

// 2. Write a function named evenOrOdd that returns the string "even" or "odd" when passed a numeric argument. The resulting string should represent whether the number is even or odd.

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// 3. Write a function named doubleTheElements that accepts an array of numbers and returns an array with double the value of each number.

function doubleTheElements(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

// 4. Write a function named sumOfElements that accepts an array of numbers and returns the sum of those numbers.

function sumOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// 5. Write a function named totalPrice that accepts an array of objects where each object represents a product from a store, that has a price property. The function should return the total of every object's price property.

function totalPrice(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    return total;
}

// 6. Write a function named findHighestPrice that accepts an array of objects where each object represents a product from a store, that has a price property. The function should return the highest price value from the array. findHighestPrice.

function findHighestPrice(products) {
    let max = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > max) {
            max = products[i].price;
        }
    }
    return max;
}

// 7. Write a function named discountCheck. The function should accept an object that represents a customer's transaction. The object passed into the function should have customerName, items, and clubMember properties. A customer will qualify for a discount if they have a total from the items property of 150 or greater, or if they are a club member. discountCheck should return a boolean representing whether the customer described by the object qualifies for a discount.
//
// HINT: The totalPrice function may be used to calculate the total price of the items by passing in the array of items.

function discountCheck(transaction) {
    let total = totalPrice(transaction.items);
    if (total >= 150 || transaction.clubMember === true) {
        return true;
    } else {
        return false;
    }
}

// 8. Write a function named newProduct with two parameters, a string that contains a name, and a number representing the product's price, and returns an object with properties name and price.

function newProduct(name, price) {
    return {
        name: name,
        price: price
    }
}

// 9. Write a function named countWords that accepts a string and returns the number of words in that string.

function countWords(str) {
    if (str === "") {
        return 0;
    } else {
        return str.split(" ").length;
    }
}

// 10. Write a function named describeNumber that takes in an integer and will return an object describing different features of the input as a number. If the input is a number, the object should have three properties: value for the value passed, evenOrOdd which should be a string to identify whether the passed argument is evenly divisible by 2, and numberOfDigits which should count the number of digits in the argument passed into the function:

function describeNumber(num) {
    if (typeof num === "number") {
        return {
            value: num,
            evenOrOdd: evenOrOdd(num),
            numberOfDigits: num.toString().length
        }
    }
}

console.log(describeNumber(8806));

let str = "johnny"
console.log(str.length);

// 11. Write a function named screamingSnakeCase that accepts a string that has several words each separated by a space, and returns a string with each word in all caps, and with the spaces replaced by underscores (ex. SCREAMING_SNAKE_CASE).

function screamingSnakeCase(str) {
    return str.split(" ").join("_").toUpperCase();
}
