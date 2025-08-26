// Example array of programming languages
const myArray = ["js", "c++", "python", "java", "ruby", "swift"];

// forEach loops through each element, but does NOT return a new array.
// Even if you write `return` inside, it won't create a new array.
const val = myArray.forEach((item) => {
    console.log(item);  // Logs each item in the array
    return item;        // This return is ignored by forEach
});

console.log(val); // Output: undefined (forEach always returns undefined)

// -------------------------------------------------------------

// Example: Using filter to extract truthy values from an array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Filter will include numbers that are truthy (0 is falsy, but all these are > 0)
const myArr = myNums.filter((num) => num); // Same as filtering out 0s, but all nums here are truthy
console.log(myArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Filter numbers greater than 3 using explicit return
const myArr1 = myNums.filter((num) => {
    return num > 3;
});
console.log(myArr1); // Output: [4, 5, 6, 7, 8, 9]

// Simulate filter using forEach (not recommended, but doable)
const myArr2 = [];
myNums.forEach((num) => {
    if (num > 3) {
        myArr2.push(num); // Manually push matching elements
    }
});
console.log(myArr2); // Output: [4, 5, 6, 7, 8, 9]

// -------------------------------------------------------------

// Array of book objects with multiple properties
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filtering science books published in or after 1995
let userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === "Science");
console.log(userBooks);
/*
Output:
[
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
]
*/

// A different filter: based on edition year and genre
userBooks = books.filter((bk) => {
    return bk.edition >= 1995 && bk.genre === "Science";
});
console.log(userBooks);
/*
Output:
[
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
]
*/
// Same result in this case — both books pass both conditions

// -------------------------------------------------------------

// 📝 Key Notes:
// - `filter()` returns a **new array** of elements that match the condition
// - `forEach()` just **loops**, doesn't return anything useful
// - In arrow functions:
//     - If you use `{}` you need `return`
//     - If you use `()` or omit braces, return is **implicit**
// - Use `filter` when you want to create a **subset** of the original array
// - Prefer `filter` over `forEach + push` for clarity and performance

