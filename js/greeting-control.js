'use strict'

import {randomGreeting} from "./greeting-logic.js";

document.querySelector('form').addEventListener("submit", event =>{
    event.preventDefault();
    const input = document.getElementById('name').value
    document.querySelector('p').innerText = `${randomGreeting()} ${input}`
});
