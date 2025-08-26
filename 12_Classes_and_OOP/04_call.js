// Define a function named `setuser` that takes one parameter `username`
function setuser(username) {
    this.username = username; // ➤ Assigns the username to the object that `this` refers to
    console.log("Called");    // ➤ Logs "Called" every time this function is executed
    // ➤ `this` is dynamic: its value depends on **how** the function is called
}
  
// Define a constructor function `createUser` that takes name, email, and password
function createUser(name, email, pass) {

    // ───── WRONG WAY (commented out): setuser(name);
    // ➤ This would call `setuser` as a regular function (not as a method of any object)
    // ➤ Inside `setuser`, `this` would refer to the global object (window/global) or 
    // be `undefined` in strict mode

    // ───── WRONG WAY (commented out): setuser.call(name)
    // ➤ Here, `name` is just a string, not an object, so it's not useful to bind 
    // `this` to it

    // ✅ CORRECT WAY: Use `call()` to explicitly bind `this`
    setuser.call(this, name); 
    // ➤ This calls the `setuser` function and explicitly sets `this` inside it to
    // refer to the current instance of `createUser`
    // ➤ So `this.username = name` correctly assigns username to the new user object
    //  being constructed by `createUser`
    
    /*
    ✅ Use .call(this, ...) if:
            The function (SetUsername) is setting properties using this.username, this.email, 
            etc.

            And you want those properties to be added to another object, like the one being 
            created in createUser.
    ❌ Don’t need .call(this) if:
            The function doesn’t use this, and you're just doing something like:

            Calculations

            Logging

            Returning values

            Modifying non-this variables
    */

    // Now continuing to add more properties to the same object (`this`)
    this.email = email; // ➤ Assigns email
    this.pass = pass;   // ➤ Assigns password
    // ➤ All values (`username`, `email`, `pass`) are now assigned to the same object 
    // that will be returned
}

// Create a new user object using `new`
const user1 = new createUser("Nai", "nai@gmail.com", "pass");
// ➤ What happens when you use `new createUser(...)`:
//    1. A new empty object is created: `{}`
//    2. That object is bound to `this` inside `createUser`
//    3. Any properties assigned to `this` are added to that object
//    4. The new object is returned

console.log(user1);
// ➤ Output: { username: 'Nai', email: 'nai@gmail.com', pass: 'pass' }
// ➤ This confirms that the `setuser.call(this, name)` correctly set the `username` 
// property
