// //T-Asia Fries
// //Daily Warm-Ups
// // let name = "T-Asia Fries"
// // let year = "2015"
// // console.log(`My name is ${name} and I graduated highschool in ${year}`)
//
// //Daily warm-up
// //10.17
// //Create a function called largestNum, where they take in 3 numbers as input and send back the largest out of the three numbers.
//
// // let num1 = 2
// // let num2 = 4
// // let num3 = 6
// //
// // console.log(Math.max(num1,num2,num3));
//
// ////
//
// // function largestNum (num1,num2,num3) {
// //     return Math.max(num1,num2,num3) + " " + 'is the greatest';
// // }
// //
// // console.log(largestNum(num1,num2,num3));
//
// // Daily warmup
// // 10.19
// // Declare a variable named 'num' with a value of 100. Using a while loop decrement num by 5 til you reach zero, and console.log("even") for every even number.
// // Example output: (95, 90 even, 85, 80 even, etc.)
//
// let num = 100
//
// while(num>=0) {
//     num-=5;
//     if(num % 2 === 0) {
//        console.log(num + " even");
//     } else {
//         console.log(num)
//     }
// }
//
// // Daily warmup
// // 10.23
// // Create an array of at least 5 of your favorite movies. Create a for each (or a for of loop) loop to console.log all of your movies in alphabetical order
//
// let movies = ['Saw', 'Wrong Turn', '21 Jump Street', 'Hitman', 'Columbiana']
//
// movies.sort();
//
// //For each loop
// movies.forEach(movies => console.log(movies));

// Will only return an array in alphabetical order
// for (let i = 0; i < 5; i++) {
//     console.log(movies.sort());
// }


// Daily Warm-up
// 10.24
// Create an array of car objects. Each object should have 3 properties: make, model and color. Write a for each or for of loop to log each cars make model and color.


// const cars = ['Infiniti', 'Honda', 'Chevrolet'];

// const cars = [
//     {
//         make: "Infiniti",
//         model: "Q60",
//         color: "Gray"
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         color: "White"
//     },
//     {
//         make: "Chevrolet",
//         model: "Silverado 1500",
//         color: "Black"
//     }
// ];

// For Each loop
// cars.forEach( cars => { console.log(`${cars.make} ${cars.model} ${cars.color}.`)
// });

// For loop

// for (let i = 0; i < 3; i ++) {
//     console.log(cars[i])
// }

// For of loop

// for(let car of cars){
//     console.log(`Here is an ${car.color} ${car.model} ${car.make}.`)
// }


// Objective: Create a function that takes in an array and returns an array of the names of people who know JavaScript.
//
//     Data Structure/Example Input:
//
//     let developers = [
//         {
//             name: "Jonathan",
//             languages: {
//                 frontend: ["HTML", "JavaScript", "CSS"],
//                 backend: ["Java"]
//             }
//         },
//         {
//             name: "Bonnie",
//             languages: {
//                 frontend: ["JavaScript"],
//                 backend: []
//             }
//         },
//         {
//             name: "Raj",
//             languages: {
//                 frontend: [],
//                 backend: ["C#", "Java", "Python"]
//             }
//         },
//         {
//             name: "Carmen",
//             languages: {
//                 frontend: ["JavaScript", "HTML", "CSS", "React"],
//                 backend: ["C#", "Java", "Python", "TypeScript"]
//             }
//         },
//     ]


// function getJavaScriptExperts(names) {
//     let javaScriptExperts = developers.filter(person => person.knowsJavaScript);
//     let name = javaScriptExperts.map(person => person.name);
//     return names;
// }
// let javaScriptExperts = getJavaScriptExperts(developers);
//
// console.log(javaScriptExperts);
//
// remember with arrays you do need to loop through**
// function getJavaScriptExperts(names) {
//     let javaDev = [];
//     for (let i = 0; i < developers.length; i++) {
//
//     }
// }

// arrow function of solved problem
// i goes through developers
// j goes through frontend
// const knowsJavaScript = (arr) => {
//         let javaScriptDevs = [];
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = 0; j < arr[i].languages.frontend.length; j++) {
//                 console.log(arr[i].languages.frontend[j])
//                 if (arr[i].languages.frontend[j] === "JavaScript") {
//                     javaScriptDevs.push(arr[i].name)
//                 }
//             }
//         }
//         return javaScriptDevs;
// }
//
// console.log(knowsJavaScript(developers));
//
// // daily warm-up
//
// // Create a function that accepts three arguments (arrOfElements, bgColor, textColor), and returns the array of objects with their corresponding properties changed to the inputted values of bgColor and textColor.
//
//     let elements = [
//     {
//         el: "button",
//         style: {
//             backgroundColor: "white",
//             color: "black"
//         },
//         content: "Submit"
//     },
//     {
//         el: "p",
//         style: {
//             backgroundColor: "white",
//             color: "black"
//         },
//         content: "Our company is better at doing company things than your company."
//     },
//     {
//         el: "h2",
//         style: {
//             backgroundColor: "white",
//             color: "black"
//         },
//         content: "Welcome Back!"
//     }
// ];

// function changeColors(arrOfElements, bgColor, textColor) {
//     let backgroundColor = bgColor;
//     let color = textColor;
//     for (let i = 0; i < arrOfElements.length; i++) {
//         arrOfElements[i].style.backgroundColor = bgColor;
//         // console.log(arrOfElements);
//         arrOfElements[i].style.color = textColor;
//     }
//     return arrOfElements;
// }
// console.log(changeColors(elements, "white", "black"))
//
// for (let i = 1; i < 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log ("FizzBuzz")
//     } else if (i % 5 === 0) {
//         console.log ("Buzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else {
//         console.log(i);
//     }
// }

// function version below

// function fizzBuzz(input) {
//     for (let i = 0; i < input; i++) {
//         if (i % 3 === 0) {
//             return "Fizz"
//         } else if (i % 5 === 0) {
//             return "Buzz"
//         } else if (i % 3 === 0 && i % 5 === 0) {
//             return "FizzBuzz"
//         } else {
//             console.log(i)
//     }
// }
//
// fizzBuzz(100);

function diagonalDifference(arr) {
    let n = arr.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - 1 - i];
    }
    let result = primaryDiagonalSum - secondaryDiagonalSum;
    return Math.abs(result);
}
diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])

// console.log(arr)

/////// JOHNNY's CODE ///////
function getDiagonal(arr) {
    // Write your code here
    // INITIALIZING AN EMPTY ARRAY THAT WILL STORE MY LEFT TO RIGHT VALUES
    let LeftToRightArr = [];
    // INITIALIZING A VARIABLE THAT WILL STORE THE *TOTAL* OF MY LEFT TO RIGHT VALUES
    let LRTotal = 0;
    // INITIALIZING AN EMPTY ARRAY THAT WILL STORE MY RIGHT TO LEFT VALUES
    let RightToLeftArr = [];
    // INITIALIZING A VARIABLE THAT WILL STORE THE *TOTAL* OF MY RIGHT TO LEFT VALUES
    let RLTotal = 0;

    //vv num IS REPRESENTING THE VALUE OF THE ELEMENT AT THE CURRENT INDEX FOR EACH ITERATION/MAPPING,
    //vv IN THIS CASE num REPRESENTS EACH NESTED ARRAY IN OUR arrOfNums ARRAY WE ARE PASSING AS AN ARGUMENT TO OUR getDiagonal FUNCTION.
    arr.map((num, index) => {
        // ^^ index REPRESENTS THE CURRENT INDEX OF EACH ELEMENT (EACH NESTED ARRAY) WHICH
        // IN THIS CASE HAPPENS TO CORRELATE/MATCH UP WITH THE ELEMENT IN THE NESTED ARRAY THAT WE WANT TO EXTRACT.
        // console.log(num);
        // console.log(index);
        // console.log(num[index]);
        // vv PUSHING MY EXTRACTED VALUES TO MY EMPTY LeftToRightArr ARRAY.
        LeftToRightArr.push(num[index]);
    })
    //vv BY USING .reverse() ON THE arr PARAM WE ARE REVERSING THE ORDER OF THE NESTED ARRAYS IN THE PARAM.
    //vv AFTER REVERSING WE CAN USE .map() JUST LIKE BEFORE, IT WILL STILL EXTRACT THE VALUE FROM LEFT TO RIGHT, BUT
    //BECAUSE arr IS NOW REVERSED WE GET CORRECT VALUES.
    arr.reverse().map((num, index) => {
        // console.log(num);
        // console.log(num[index]);
        // vv PUSHING MY EXTRACTED VALUES TO MY EMPTY RightToLeftArr ARRAY.
        RightToLeftArr.push(num[index]);
    })
    // console.log(rightArr);
    // console.log(leftArr);
    //LOOPING THROUGH NEW POPULATED LeftToRightArr ARRAY OF NUMBERS
    LeftToRightArr.forEach((num) => {
        // ON EACH ITERATION IM ADDING THE VALUE OF num TO MY LRTotal VARIABLE.
        LRTotal += num;
    })
    //LOOPING THROUGH NEW POPULATED LeftToRightArr ARRAY OF NUMBERS
    //vv ON EACH ITERATION IM ADDING THE VALUE OF num TO MY RLTotal VARIABLE.
    RightToLeftArr.forEach((num) => RLTotal += num)
    // console.log(Math.abs(LRTotal - RLTotal));
    // vv USING Math.abs() TO RETURN THE ABSOLUTE VALUE OF THE DIFFERENCE OF MY TWO TOTALS.
    return Math.abs(LRTotal - RLTotal)
}

let arrOfNums = [
    [ 11, 2, 4 ],
    [ 4, 5, 6],
    [ 10, 8, -12]
];

// getDiagonal(arrOfNums);
console.log(getDiagonal(arrOfNums));