console.log("Hello from external JavaScript")
alert("Welcome to my website!")

let userInput = parseInt(prompt("What is your favorite color"));

alert(`Great my favorite color is ${userInput} too`)

let rentalMermaid =parseInt(prompt("How many days do you want to rent The Little Mermaid?"));

alert(`You have selected ${rentalMermaid}`);

let brotherBear = parseInt(prompt("How many days do you want to rent Brother Bear?"));

alert(`You have selected ${brotherBear}`);

let hercules = parseInt(prompt("How many days do you want to rent Hercules?"));

alert(`You have selected ${hercules}`);

let total = (rentalMermaid + brotherBear + hercules) * 3;

alert(`Your total is: $${total.toFixed(2)}`)

let googlePay = parseInt(prompt("How much does Google pay you per hour?"));
alert(`Google paid you ${googlePay} per hour`)

let facebookPay = parseInt(prompt("How much does Facebook pay you per hour?"));
alert(`Facebook paid you ${facebookPay} per hour`)

let amazonPay = parseInt(prompt("How much does Amazon pay you per hour?"));
alert(`Amazon paid you ${amazonPay} per hour`)

let googleHours = parseInt(prompt("How many hours did you work for Google this week?"));
alert(`You worked ${googleHours} this week`)

let facebookHours = parseInt(prompt("How many hours did you work for Facebook this week"));
alert(`You worked ${facebookHours} this week`)

let amazonHours = parseInt(prompt("How many hours did you work for Amazon this week?"));
alert(`You worked ${amazonHours} this week`)

let totalPay = (googlePay * googleHours) + (facebookPay * facebookHours) + (amazonPay * amazonHours);
alert(`Your payment for this week totals to: $${totalPay.toFixed(2)}`);


