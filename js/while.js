// While loop

let num = 1;

while(num < 65536) {
    console.log(num = num * 2);
}

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

