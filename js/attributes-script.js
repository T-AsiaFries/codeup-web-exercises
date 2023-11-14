// Two seconds after the page loads, change the "profile-pic" src attribute to a different image.

setTimeout(function () {
    const profilePic = document.getElementById('profile-pic');
    if (profilePic) {
        profilePic.src = 'img/success.jpeg';
    }
}, 2000);

// Four seconds after the page loads, use innerHTML to change the name in "profile-name".

setTimeout(function () {
    const profileName = document.getElementById('profile-name');
    if (profileName) {
        profileName.innerHTML = 'Madrid Williams'
    }
},4000);

// Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.

setTimeout(function () {
    const profileDesc = document.getElementById('profile-desc');
    if (profileDesc) {
        profileDesc.style.color = "green"
        profileDesc.style.fontFamily = "sans-serif"
    }
}, 6000)

// Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.


let profileCard = document.getElementById('profile-card');


setInterval(function () {
    profileCard.classList.toggle('card')
    if (profileCard.hasAttribute('card')) {
        profileCard.setAttribute("style", "background-color: green")

    }
},2000)

console.log(profileCard.hasAttribute('background-color'));
profileCard.setAttribute("style", "background-color: green")
profileCard.classList.toggle('background-color')
console.log(profileCard.hasAttribute('background-color'))


