
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    const names = ['tasia', 'america', 'free', 'unique'];
    const namesArr = ['tasia', 'america', 'free', 'unique',["test", "test2"]];
console.log(names);

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(`There are ${names.length} names in the array`);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0])
    console.log(names[1])
    console.log(names[2])
    console.log(names[3])

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (let i = 0; i < names.length; i++) {
        console.log(" My friends names are " + names[i])
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(names => console.log(names))

    // forEach loop ,without arrow function

    // names.forEach(function(name) {
    //     console.log(name);
    // })

    // Of loop

    // for (let name of names ) {
    //     console.log(name)
    // }
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array


     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
const numbers = ['0', '1', '2', '3']
function first() {
    console.log(numbers[0]);
}
first();

function second() {
    console.log(numbers[1]);
}
second();

function third() {
    console.log(numbers[2]);
}
third();

function fourth() {
    console.log(numbers.length -1); // (If you dont know what the last index is, otherwise you could put 3 in the brackets)
}
fourth();


