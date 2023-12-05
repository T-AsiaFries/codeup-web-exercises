'use strict'

import randomNumber from "./numbers-utils.js";
function rollD6(){
    return randomNumber(1, 6);
}

function rollD20(){
    return randomNumber(1, 20);
}

console.log(rollD6());
console.log(rollD20());

export {rollD6, rollD20}
// (OR INFRONT OF FUNCTION)

//greeting logic