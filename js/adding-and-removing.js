const newContent = document.querySelector('#newContent');

// Creating an element
const myNewP = document.createElement("p");
myNewP.innerText = "I'm a paragraph";
myNewP.id = "myNewP"
myNewP.classList.add("fs-2", "fw-bold", "text-center")

// adding the element to our dom. (if you don't append it. It is not visible in the browser) The appendChild() method adds an element to the DOM as the last child of the specified parent element.
document.querySelector("#newContent").appendChild(myNewP);

//
const myOtherP = document.createElement("p");
myOtherP.innerText = "I'm a paragraph too!";
myOtherP.classList.add("text-center");
document.querySelector("#newContent").appendChild(myOtherP);

// remove and element by using the .removeChild method. Which you need to specify a parent element and the child element you want to remove
document.querySelector("#newContent").removeChild(myOtherP)

// removing an element using the .remove() method which you can simply call whatever element you are trying to delete and call the .remove() on that element
// myNewP.remove();

const myAwesomeP = document.createElement("h1");
myAwesomeP.innerText = "I'm an EVEN BETTER paragraph";
myAwesomeP.classList.add("fs-1", "text-center");

// document.querySelector("#newContent").appendChild(myAwesomeP);

document.querySelector("#newContent").replaceChild(myAwesomeP, myNewP)

// adding elements in specific places in DOM

const three = document.querySelector("#two");

const twoAndAHalf = document.createElement("li");
twoAndAHalf.innerText = "Two and a half";
three.after(twoAndAHalf);

// get references to the to-do input and its parent form
const toDoInput = document.querySelector("#to-do");
const toDoForm = toDoInput.parentElement;

// declare a callback to handle the user input
const handleUserInput = (event) => {
    event.preventDefault();
    console.log(toDoInput.value);
    toDoInput.value = '';
}

// output user input to the DOM
toDoForm.addEventListener('submit', handleUserInput);

// ABSOLUTELY NEED event.preventDefault() TO STORE ANY SUBMITTED DATA IN CONSOLE LOG



// DYNAMICALLY ADDING ELEMENTS

// obtain reference to the button that will trigger div creation
const createButton = document.querySelector("#create-a-div");

// function to create new divs
// within each div there is a button with the class `event-trigger`
const createDiv = () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("dynamic-div");
    newDiv.innerHTML = "<p>I'm a new div!</p>" +
        "<button class='event-trigger'>Click Me!</button>";
    document.querySelector("#new-div-section").appendChild(newDiv);
    newDiv.lastChild.addEventListener('click', () => console.log('Clicked!'));
}

// add the click handler to the button
createButton.addEventListener('click', createDiv);

// // THIS CODE WILL NOT WORK ----> ADDED IT ON LINE 71

// const eventButtons = document.querySelectorAll(".event-trigger");
// const buttonEvent = () => console.log('Clicked!');
// eventButtons.forEach( button => button.addEventListener('click', buttonEvent));

// ANOTHER SOLUTION TO RETURN CLICKED IN MY CONSOLE.LOG AFTER CLICKING THE BUTTON

const newDivSection = document.querySelector("#new-div-section");
newDivSection.addEventListener('click', (e)=>{
    if (e.target.classList.contains('event-trigger')){
        console.log('Clicked!');
    }
});