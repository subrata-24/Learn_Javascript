// let userName = "Subrata"; 
// ❌ This line is commented out. If used, this would create a variable `userName` in the global scope.

// Creating an object named `user`
const user = {
    userName: "Subrata Biswas", // Property storing the user's name as a string
    age: 25, // Property storing the user's age as a number

    getMethod: function () {
        // 🧠 This is a method inside the `user` object (a function tied to an object)
        
        // console.log("It is nothing  but a method!")
        // ➤ If uncommented, this would print the message when getMethod is called

        // console.log(`Username : ${userName}`);
        // ⚠️ This would throw an error if `userName` is not declared in scope.
        // `userName` is NOT defined in this scope (global `userName` is commented out above)

        // console.log(this);
        // ➤ Prints the object that called this method. Inside an object method, `this` refers to the object itself (`user`)

        // console.log(`Username  : ${this.userName}`)
        // ✅ Correct way to access `userName` property of the object using `this`
    }
}

// console.log(user.userName);
// ➤ Would print "Subrata Biswas", directly accessing a property of the object

// console.log(user.getMethod());
// ➤ Would run the `getMethod` function if uncommented and show logs if any are enabled inside the function

// console.log(this);
// 🔍 In a browser, this would refer to the `window` object (global object)
// 🔍 In strict mode or Node.js, this might return `{}` or `undefined` depending on the context

// ------------------------------------

// 🔨 Constructor function to create user objects
function User(username, email, isLoggedIn) {
    // `this.username` assigns the passed argument to the object's property
    this.username = username;
    this.email = email;
    this.isLoggedIn = isLoggedIn;

    // Defining a method `greetings` for each created object
    this.greetings = function () {
        console.log(`Welcome ${this.username}`);
        // ➤ This function can be called on any object created using `new User()`
        // ➤ `this.username` refers to the object it's called on
    }

    return this; 
    // ❓ What happens if I do not return this?

    // ✅ ANSWER:
    // If you call `User()` without `new`, and don’t return `this`, you'll get `undefined`.
    // But if you use `new User()`, JS automatically returns the new object created, so `return this` is optional.
    // If you write `return {}` or another object, it replaces the default return object.
}

// ⚠️ The following two lines are commented out
// const user1 = User("Subrata", "subrata17@cse.pstu.ac.bd", false);
// const user2 = User("Biswas", "sb8232749@gmail.com", true);
// If you call a constructor function without `new`, `this` will refer to the global object (in non-strict mode) and might cause bugs.

// ✅ Correct usage with `new`
const user1 = new User("Subrata", "subrata17@cse.pstu.ac.bd", false);
// ➤ Creates a new object using the constructor function and assigns it to user1

const user2 = new User("Biswas", "sb8232749@gmail.com", true);
// ➤ Similarly creates a second user

// console.log(user1);
// ➤ Would print user1's object with properties and `greetings` method

// console.log(user2);
// ➤ Would print user2's object

console.log(user1.constructor);
// ➤ Prints the constructor function used to create the object
// 🔍 Output: [Function: User]
// 📘 `.constructor` is a reference to the function that created the instance (used internally)

// ------------------------------------
// ❓ What is constructor?

// ✅ ANSWER:
// A constructor is a special function used to create and initialize objects.
// When you use the `new` keyword with a constructor function:
// 1. A new empty object is created.
// 2. `this` is set to refer to that object.
// 3. The constructor function runs and assigns properties to `this`.
// 4. The new object is returned automatically (unless you return another object manually).

// ❓ What is instanceof?

// ✅ ANSWER:
// The `instanceof` operator checks whether an object was created by a specific constructor or class.
// Syntax: `object instanceof ConstructorFunction`
// Example: `user1 instanceof User` returns true
// Useful for checking types or class hierarchy.

// ------------------------------------

// /* All about new.
    // It is constructor function.
    // Working:
    // 1. Create a new Object.
    // ✅ Yes — a blank object is created.

    // 2. Called a new constructor function.
    // ✅ The constructor function is executed with the new object as `this`.

    // 3. Inject all the argument into this
    // ✅ Arguments are passed and assigned to properties inside the function via `this`.

    // 4. Got all in return.
    // ✅ The fully built object is returned (automatically by default).
// */
