'use strict'

const greetings =
    [
        "Hello",
        "Hi",
        "Hey there",
        "Greetings",
        "Salutations",
        "Howdy",
        "Yo",
        "Bonjour",
        "Hola",
        "Ciao",
        "Namaste",
        "G'day",
        "What's up",
        "Sup",
        "How's it going",
        "Nice to meet you",
        "Welcome",
        "Hey",
        "How are you",
        "Pleased to meet you"
    ];

export function randomGreeting() {
    const greeting = Math.floor(Math.random() * greetings.length);
    const newGreeting = greetings[greeting];
    return newGreeting;
}

const greeting = randomGreeting();
console.log(greeting);