const user = {
    username: "Subrata",
    price: 199,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to my website`); // "this" refers to the "user" object
    }
};

// Calling the welcomeMessage function
// user.welcomeMessage();

// Changing the username property and calling the function again
// user.username = "Biswas";
// user.welcomeMessage();

// "this" in the global context (in Node.js, this will log an empty object `{}`)
// console.log(this);

// Regular function to check "this" behavior in functions
function myInfo(){
    let username = "Subrata";
    console.log(this); // In a regular function, "this" refers to the global object (Window in browser, undefined in strict mode in Node.js)
}

// Anonymous function assigned to a variable
const myInfo = function() {
    let username = "Subrata";
    console.log(this); // Same behavior as the function above
};

// Calling the function
// myInfo();

// Arrow function to check "this" behavior
const myInfo = () => {
    let username = "Subrata";
    console.log(this.username); // "this" in an arrow function refers to its surrounding lexical scope (not the calling object)
};

// Calling the function
// myInfo();

// Function to add two numbers (explicit return)
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// Function to add two numbers (implicit return, single-line arrow function)
const addTwo = (num1, num2) => (num1 + num2);

// Calling the function and logging the result
// console.log(addTwo(4, 3));

// Arrow function that returns an object
const objectReturn = () => ({ username: "Subrata" });

// Calling the function and logging the returned object
console.log(objectReturn());

// Array declaration
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

// Using forEach with a regular anonymous function
myArray.forEach(function() {
    // Regular function maintains its own "this"
});

// Using forEach with an arrow function
myArray.forEach(() => {
    // Arrow function does not bind its own "this"
});
