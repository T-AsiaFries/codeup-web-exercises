let userInput=prompt("Enter a odd number between 1 and 50")

while (isNaN(userInput) || userInput % 2 === 0) {
    userInput = parseInt(prompt("Please try again"));
}

for (let i = 1; i <50; i+= 2) {
    console.log("Here is an odd number " + i)
    if(i == userInput) {
        console.log("Yikes! Skipping number " + i)
        continue;
    }
}

// Continue skips the code below

