/* 
What is class?
➡️ A class in JavaScript is a blueprint for creating objects with shared properties and 
methods.

What it does?
➡️ It helps you create multiple objects that share structure (properties) and behavior (methods) without rewriting code.

How it does?
➡️ A class contains a constructor (special function for initializing objects) and methods.
   When you use `new ClassName()`, JavaScript:
   1. Creates a new object
   2. Sets its prototype to the class's prototype
   3. Runs the constructor with `this` pointing to the new object
   4. Returns the object

*/

// Declaring a class named `user`
class user {
    // constructor is a special method that runs when a new object is created with `new user(...)`
    constructor(username, email, password) {
        this.username = username; // assigns the passed `username` to the current object
        this.email = email;       // assigns the passed `email`
        this.password = password; // assigns the passed `password`
    }

    // Method: encryptPassword
    // What it does: Adds 'abc' to the end of the password string
    // When it runs: Only when explicitly called like `userOne.encryptPassword()`
    // What it returns: A string with the password + 'abc'
    // Who uses it: Any consumer of this method — e.g., `console.log(...)`, or storing it somewhere
    encryptPassword() {
        return `${this.password}abc`;
    }

    // Method: changeUsername
    // What it does: Converts the username to uppercase
    // When it runs: When you explicitly call `changeUsername()` on the object
    // What it returns: Uppercase string version of username
    // Who uses it: Whoever calls this method
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

// Creating an object from the `user` class using the `new` keyword
const userOne = new user("suvro", "suvro@gmail.com", "1234");

// Calls the method `encryptPassword()` on `userOne`
// Output: "1234abc"
console.log(userOne.encryptPassword());

// Calls the method `changeUsername()` on `userOne`
// Output: "SUVRO"
console.log(userOne.changeUsername());


// ---------------------------------------------
// Same functionality written using constructor function (old way before ES6 classes)

// Constructor function version of user
function anotherUser(username, email, password) {
    this.username = username; // assign username
    this.email = email;       // assign email
    this.password = password; // assign password
}

// Add method to prototype so all instances share the same function (memory efficient)
anotherUser.prototype.encryptPassword = function () {
    return `${this.password}abc`; // same functionality as the class version
}

// Add another method to prototype for changing username to uppercase
anotherUser.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
}


const anotherUserOne = new anotherUser("dhur", "dhur@gmail.com", "dhur");

// This still works, because `user` class has same method names and behavior
console.log(anotherUserOne.encryptPassword()); // "dhurabc"
console.log(anotherUserOne.changeUsername());  // "DHUR"
