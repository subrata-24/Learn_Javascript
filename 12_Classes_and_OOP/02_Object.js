// Define a function called multipleBy5 that takes one parameter `num`
function multipleBy5(num) {
    return num * 5;
    // ➤ Returns the result of multiplying input by 5
    // ➤ This return value is used when you *call* the function (e.g. multipleBy5(5))
}

// Add a custom property called `power` to the function object
multipleBy5.power = 2;
// ➤ Functions in JavaScript are also objects
// ➤ You can attach custom properties to them just like any object

console.log(multipleBy5(5));
// ➤ Calls the function with input 5
// ➤ Returns 25 (5 * 5) — printed to console

console.log(multipleBy5.power);
// ➤ Accesses the custom `power` property attached to the function object
// ➤ Output: 2

console.log(multipleBy5.prototype);
// ➤ Logs the prototype of the function `multipleBy5`
// ➤ Every function has a `.prototype` object, used when the function is used as a 
// constructor (with `new`)
// ➤ Here, `multipleBy5` is not used with `new`, so `.prototype` is unused, but still 
// exists as an empty object `{}`


// Constructor function for creating user objects
function createUser(username, score) {
    // `this` refers to the object that will be created when `new` is used
    this.username = username; // ➤ assigns username to the instance
    this.score = score;       // ➤ assigns score to the instance
    // ➤ No need to return anything explicitly when using `new`
}

// Adding a method `increment` to the prototype of createUser
createUser.prototype.increment = function () {
    this.score++;
    // ➤ Increases the score of the current instance by 1
    // ➤ `this` refers to the specific object that calls `increment()`
}

// Adding another method `printMe` to the prototype
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
    // ➤ Logs the current score of the user
}

// Create a new instance using the `new` keyword
const chai = new createUser("chai", 25);
// ➤ Here's what `new` does behind the scenes:
//    1. Creates an empty object: {}
//    2. Links it to createUser.prototype
//    3. Binds `this` inside createUser to the new object
//    4. Returns the new object

// Call a method on the `chai` instance
chai.printMe(); 
// ➤ Logs: "price is 25"
// ➤ Works because `printMe` is available via the prototype chain

// Create another user, but WITHOUT using `new`
const tea = createUser("tea", 250);
// ⚠️ BIG MISTAKE: This does NOT create a new object!
// ➤ Here, `this` inside createUser refers to the global object (in browsers: `window`, in Node: `global`)
// ➤ It attaches `username` and `score` to the global scope, NOT to `tea`
// ➤ `tea` is actually `undefined` because `createUser` doesn't return anything
// 🛑 You should ALWAYS use `new` when calling constructor functions like `createUser`

/*
Summary: What does `new` do behind the scenes?

✅ A new object is created.
✅ That object is linked to the constructor's prototype.
✅ The constructor is executed with `this` bound to the new object.
✅ The new object is returned automatically if constructor doesn’t explicitly return 
another object.

This is why:
- `const chai = new createUser(...)` creates a proper user instance.
- `const tea = createUser(...)` doesn't — it corrupts the global scope!

To fix the `tea` issue, use:
    const tea = new createUser("tea", 250);
*/
