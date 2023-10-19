// 2.

function showMultiplicationTable(num) {
    for (let i = 1; i <=10; i++) {
        console.log(num + " * " + i + " = " + num * i)
    }
}

showMultiplicationTable(7);

// 3.

for (let i = 0 ; i < 10; i++) {
    let random = Math. floor(Math. random() * ((200-20)+1) + 20);
    if(random % 2 === 0) {
        console.log(random + " is even")
    } else if(random % 2 !== 0) {
        console.log(random + " is odd")
    }
}

// 4.

for (let i = 0; i <10; i++) {
    console.log(i.toString().repeat(i))
}

// Another solution

// for (let i = 1; i < 10; i++) {
//     let num = ""
//     for (let j = 0; j < i; i++) {
//         num = num + i;
//     }
//     console.log(num)
// }

// 5.

for (let i = 100; i > 0; i-=5) {
    console.log(i)
}

// for (let i = 100; i >= 5; i-=5) {
//     console.log(i)
// }