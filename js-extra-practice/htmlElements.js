'use strict'

function heading(str) {
    let heading1 = '<h1>';
    heading1 += str + '</h1>';
    return heading1
}

console.log(heading('Title'));

// 3 input parameters
function unList(str1, str2, str3) {
    let unList = '<ul>';
    unList += '\n' + '<li>' + str1 + '</li>' + '\n' + '<li>' + str2 + '</li>' + '\n' + '<li>' + str3 + '</li>' + '\n' + '</ul>'
    let list = '<li>';
    return unList
}

console.log(unList('Soda','Tea','Water'));