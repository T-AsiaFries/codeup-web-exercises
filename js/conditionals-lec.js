// console.log("Hello world");

let age = 16;

if (age >= 16) {
    console.log("You're eligible to drive")
}

if (age < 16) {
    console.log("You can't drive yet")
}

// same example with if/else conditional

if (age >= 16) {
    console.log("You can drive")
} else {
    console.log("You can't drive")
}

// example if/else if/else conditional

let currentDay = prompt(("What is the day today?")).toLowerCase()

if (currentDay === `monday` ||
    currentDay === `tuesday` ||
    currentDay === `wednesday`) {
    console.log("I love " + currentDay)
} else {
    console.log(currentDay + "Is not a valid day")
}

let letsPlay = confirm("Do you want to play")

if (letsPlay) {
    console.log("Great lets play xyz")
} else {
    console.log("Maybe next time")
}

const username = "user";
const password = "password";

// prompt the user to enter a username and password

const inputedUsername = prompt("Please enter a username")

const inputedPassword = prompt("Please enter a password")

// next I want to console.log("You're logged in") if username, inputedUsername && password, inputedPassword match

if (username === inputedUsername && password === inputedPassword) {
    console.log("You're logged in")
} else if (username !== inputedUsername && password !== inputedPassword) {
    console.log("Incorrect username and password")
} else if (username !== inputedUsername) {
    console.log("Incorrect username")
} else if (password !== inputedPassword) {
    console.log("Incorrect password")
} else {
    console.log("Unexpected error")
}

// example nested conditional

if (username === inputedUsername) {
    if (password === inputedPassword) {
        console.log("All logged in")
    } else {
        console.log("Incorrect password")
    }
} else {
    console.log("Invalid username")
}

// Ternary operator example
// (?) = if/is true, (:) = else/false

let name ="Bob";

let greeting = name === 'Bob' ? "Hello, " + name : "Hello stranger!" ;
console.log(greeting);

let currentCurrentDay = currentDay === 'monday' || currentDay === 'tuesday' || currentDay === 'wednesday' ? "I love " + currentDay : currentDay = "Is not a valid day";

console.log(currentCurrentDay);

// Switch statement example

let daysOfWeek = 'Saturday';

switch (daysOfWeek) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log("It's a weekday.");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("It's a weekend day.");
        break;
    default:
        console.log("Invalid day of the week");
}

// using function and if/else

function sayHello(name) {
    if (name.length <= 20) {
        return `Hello, ${name}`
    } else {
        return "That is way too long of a name"
    }
}

console.log(sayHello("T-Asia"));