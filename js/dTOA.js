let a =1;
console.log(a)
let b = a++;
console.log(b)
let c = ++a;
console.log(c)
//a=1,b=1,c=3
let d = "hello"; d++
console.log(d)
let e = false; e++
console.log(e)
//d=NaN,e=0
let perplexed; perplexed + 2;
//NaN
let price = 2.7;
console.log(price.toFixed(2));
//2.70
//price = "2.7";
price.toFixed(2)
//parseInt(price).toFixed(2); *pulls first number from string
isNaN(0)
//false
isNaN(1)
//false
isNaN("")
//true
isNaN("string")
//true
isNaN("0")
//false
isNaN("1")
//false
isNaN("3.145")
//false
isNaN(Number.MAX_VALUE)
//false
isNaN(Infinity)
//false
isNaN("true")
//true
isNaN(true)
//false
isNaN("false")
//true
isNaN(false)
//false
!true
//false
!false
//true
!!true
//true
!!false
//false
!!0
//false
!!-0
//false
!!1
//true
!!-1
//true
!!0.1
//true
!!"hello"
//true
!!""
//false
!!''
//false
!!"false"
//true
!!"0"
//true

//Question 2

 sample = "Hello Codeup";
console.log(sample.length);
//Uppercase
console.log(sample.toUpperCase);
//Lowercase
console.log(sample.toLowerCase);
//concatenate sample to add students
sample += "Student"
console.log(sample)
//shorthand plus = operator
 sample = "Hello Codeup Student"
console.log(sample.replace("Student","Class"))
//finding lowercase "c" *We get back -1 because lowercase c doesnt exist in sample variable.
console.log(sample.indexOf("c"));
//finding uppercase "C"
console.log(sample.indexOf("C"));
console.log(sample.substring(sample.indexOf("C"), 1 + sample.indexOf("p")))
//another solution
console.log(sample.substring(6,12))

//Question 3

let littleMermaid= 3;
let brotherBear = 5;
let hercules = 1;
let totalPrice = (littleMermaid + brotherBear + hercules) * 3
console.log(totalPrice)
let google = 400 * 6;
let amazon = 380 * 4;
let facebook = 350 * 10;
let overallPrice = (google + amazon + facebook)
console.log(overallPrice)
//template version of the same result
console.log(`Your total pay is $${overallPrice}`)

//Question 4

let username = 'codeup';
let password = 'notastrongpassword';

let passLength = password.length > 4
console.log(passLength);

let notInclude2 = !password.includes(username);
console.log(notInclude2)

//Checking if 20 characters
let characterCheck = username.length <21;
console.log(characterCheck)

let whiteSpace = (username.trim() == username) && (password.trim() == password);
console.log(whiteSpace)

