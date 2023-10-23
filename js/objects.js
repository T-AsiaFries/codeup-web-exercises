// (function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = { firstName: 'T-Asia', lastName: 'Fries' };
    const { firstName, lastName } = person;

    console.log(firstName);
    console.log(lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    function sayHello (name) {
        return "Hello from T-Asia Fries"
    }

    console.log(sayHello('T-Asia Fries'));

    //person.sayHello = function() {
//return `Hello from ${person.firstName} ${person.lastName}`
//}

// console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
// declare a for each loop to iterate each name in the array
    shoppers.forEach(shoppers => {
        // declare the name variable
        let name = shoppers.name
        // declare the amount before the discount
        let amountBeforeDiscount = shoppers.amount
        // let the discount equal 0
        let discount = 0
        // If statement for if the amount is over 200 apply the discount = the discounted amount per each name
        if (amountBeforeDiscount >= 200) {
            discount = amountBeforeDiscount * .12
            // else statement for when the name spends less than 200
        }
        let amountAfterDiscount = amountBeforeDiscount - discount

        console.log(`${name} bought $ ${amountBeforeDiscount.toFixed(2)}. Discount: $ ${discount.toFixed(2)}. Your new total is $ ${amountAfterDiscount.toFixed(2)}`)
    });




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    const books = [
        {
            title: "Losers pt. 1",
            author: {
                firstName: "Harley",
                lastName: "Laroux",
            }
        },
        {
            title: "Reminders of Him",
            author: {
                firstName: "Colleen",
                lastName: "Hoover"
            }
        },
        {
            title: "Confess",
            author: {
                firstName: "Colleen",
                lastName: "Hoover",
            }
        },
        {
            title: "The Silent Patient",
            author: {
                firstName: "Alex",
                lastName: "Michaelides",
            }
        },
        {
            title: "Losers pt. 2",
            author: {
                firstName: "Harley",
                lastName: "Laroux",
            }
        }
    ]

    console.log(books[3].title);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

for(let i = 0; i < books.length; i++) {
    console.log("Book #" + (i +1));
    console.log("Title: " + books[i].title);
    console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
}

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title,author) {
        let book = {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        }
        return book;
    }

    books.push(createBook("Confess", "Colleen", "Hoover")) // To add the newly created book
    function showBookInfo(book, bookNum) {
        console.log("Book #" + bookNum);
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
}



// })();