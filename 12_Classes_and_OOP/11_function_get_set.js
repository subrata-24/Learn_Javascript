/* 
📌 What is this code about?
This code defines a **constructor function** (not a class) to create user objects with **custom getter and setter behavior** using `Object.defineProperty()`.

📘 What topic does it cover?
- Constructor functions
- `Object.defineProperty()`
- Getter and setter functions (manually defined)
- Encapsulation of internal properties (`_email`, `_password`)

🔧 What does the code do?
- Creates a `User` constructor to initialize user data (`email`, `password`)
- Internally stores these values as `_email` and `_password`
- Exposes controlled access to `email` and `password` using defined getters and setters

⚙️ How does it work?
- `Object.defineProperty()` is used to define:
  - A `get` function for `email` → returns email in uppercase
  - A `set` function for `email` → updates `_email`
  - Similarly for `password` → returns password in uppercase on access
- When you access `userOne.email`, it calls the `get` function and returns uppercase email
- When you assign `userOne.email = "new@email.com"`, it calls the `set` function

📗 Important property/concept used:
🔹 `Object.defineProperty(obj, propName, descriptor)` — Defines a new property with custom getter/setter behavior or modifies an existing one.
🔹 `get` — Function called when the property is **read**
🔹 `set` — Function called when the property is **assigned a new value**
🔹 `_email` / `_password` — Internal variables used to safely store the original values without direct access
*/


// Constructor function named `User` to create new user objects
function User(email, password) {
    // Internal "private-like" properties for email and password
    this._email = email;       // Stores the original email value
    this._password = password; // Stores the original password value

    // Define a custom property "email" with getter and setter
    Object.defineProperty(this, 'email', {
        // Getter: triggered when you access `userOne.email`
        get: function () {
            return this._email.toUpperCase(); // Returns email in uppercase
        },
        // Setter: triggered when you assign to `userOne.email = ...`
        set: function (value) {
            this._email = value; // Updates the internal `_email` property
        }
    });

    // Define a custom property "password" with getter and setter
    Object.defineProperty(this, 'password', {
        // Getter: triggered when you access `userOne.password`
        get: function () {
            return this._password.toUpperCase(); // Returns password in uppercase
        },
        // Setter: triggered when you assign to `userOne.password = ...`
        set: function (value) {
            this._password = value; // Updates the internal `_password` property
        }
    });
}

// Creating a new user using the constructor function
const userOne = new User("ss@gmail.com", "123abc");

// Logs the whole object to show its structure
console.log(userOne); 
// ➤ You will see the internal values stored as `_email` and `_password`
//    and two defined properties: `email` and `password` (with getter/setter)

// Accessing the `email` property triggers the `get` function
console.log(userOne.email);     
// ➤ Outputs: "SS@GMAIL.COM" (uppercase due to getter logic)

// Accessing the `password` property triggers the `get` function
console.log(userOne.password);  
// ➤ Outputs: "123ABC" (uppercase due to getter logic)
