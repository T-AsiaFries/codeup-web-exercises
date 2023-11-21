const users = [
    {
    id: 1,
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript'],
    yearsOfExperience: 5
    },
    {
    id: 2,
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php'],
    yearsOfExperience: 6
    },
    {
    id: 3,
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash'],
    yearsOfExperience: 7
    },
    {
    id: 4,
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql'],
    yearsOfExperience: 8
    },
    {
    id: 5,
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php'],
    yearsOfExperience: 9
}];


// 1.

const threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages);

// 2.

const emailAdresses = users.map(user => user.email);
console.log(emailAdresses);

// 3.

const totalYearsOfExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);
const averageYearsOfExperience = totalYearsOfExperience / users.length;

console.log(totalYearsOfExperience)
console.log(averageYearsOfExperience)

// 4.

const longestEmail = emailAdresses.reduce((email, longest) => {
    if (email.length > longest.length) {
        return email
    } else {
        return longest
    }
});
console.log(longestEmail)

// 5.

const userList = users.reduce((accumulator, user, index) => {
    if (index === 0) {
        return user.name;
    } else if (index === users.length - 1) {
        return `${accumulator}, and ${user.name}.`;
    } else {
        return `${accumulator}, ${user.name}`;
    }
}, 'Your instructors are:');


console.log('Your instructors are:', userList)

// BONUS QUESTION

// const listOfLanguages = users.reduce((languages, user) => {
//     if (languages) {
//         return user + languages
//     }
// })
// console.log(listOfLanguages)