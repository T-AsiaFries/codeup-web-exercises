// While loop

let num = 1;

while(num < 65536) {
    console.log(num = num * 2);
}

// Similar solution ^^

// let num = 1;
// while(num < 65536) {
//     num *=2;
//     console.log(num)
// }

// Do while loop

let allCones = Math.floor(Math.random() * 50) + 50;

// Cannot put allCones inside the body because it will keep generating a random number.

do {
    let conesSold = Math.floor(Math.random() * 5) + 1;
    if(allCones < conesSold) {
        console.log("Yay! I sold them all!")
        break;
    } else {
        allCones = allCones - conesSold;
        console.log(conesSold + " sold");
        console.log(allCones + " all cones are left")
    }
} while (allCones > 0)

// Similar solution

// do {
//     let conesSold = Math.floor(Math.random() * 5) + 1
//     if(conesSold <= allCones) {
//         console.log(`${conesSold} cones sold...`)
//         allCones -= conesSold
//     } else {
//         console.log(`Cannot sell you ${conesSold} cones. I only have ${conesSold}`)
//     }
// } while (allCones !== 0)
// console.log("Yay! I sold them all")

