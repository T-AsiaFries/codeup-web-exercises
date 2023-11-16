// .parentElement

const box1 = document.querySelector('.box1');
const parent = box1.parentElement
console.log(parent);

const stateParksUL = document.getElementById('state-parks-texas');
stateParksUL.parentElement.style.background = 'lightblue';

// .children (can not use for each method not compatible with the .children method, have to use regular for loop)

const stateParksLIs = document.querySelector('#state-parks-texas').children;
for (let i = 0; i < stateParksLIs.length; i++) {
    stateParksLIs[i].style.color = 'darkgreen';
    stateParksLIs[2].style.fontWeight = 'bold';
    stateParksLIs[4].style.fontStyle = 'italic';
    // stateParksLIs[0].style.visibility = 'hidden';
    stateParksLIs[0].style.fontSize = '30px'
}

// .firstElementChild

const nationalParkUL = document.getElementById('national-parks');
nationalParkUL.firstElementChild.style.color = 'blue';
nationalParkUL.lastElementChild.style.background = 'beige';

// .nextElementSibling

const nationalParksHeading = document.querySelector('#national-parks-heading');
nationalParksHeading.nextElementSibling.style.backgroundColor = 'salmon';