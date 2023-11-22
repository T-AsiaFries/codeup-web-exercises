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
        profileName.innerHTML = 'Free Fries'
    }
}, 4000);

// Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.

setTimeout(function () {
    const profileDesc = document.getElementById('profile-desc');
    if (profileDesc) {
        profileDesc.style.color = "white"
        profileDesc.style.fontFamily = "sans-serif"
    }
}, 6000)

// Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.


let profileCard = document.getElementById('profile-card');


setInterval(function () {
    profileCard.classList.toggle('card');
    if (profileCard.classList.contains('card')) {
        profileCard.style.backgroundColor = "green";
    } else {
        profileCard.style.backgroundColor = "";
    }
}, 2000);




