/* 
📌 What is this code about?
This code demonstrates how to use **getters and setters** in JavaScript classes to control and manipulate how properties are accessed or updated.

📘 What topic does it cover?
- Classes
- Getter and Setter methods
- Encapsulation using private-like variables (`_email`, `_pass`)

🔧 What does the code do?
- It creates a `user` class that stores an email and a password.
- The class uses `get` and `set` accessors to:
  - Format the password when accessed.
  - Convert the email to uppercase when accessed.
  - Internally store the actual values using custom property names.

⚙️ How does it work?
- When you create a `user` object and pass email/password to the constructor, the `set` methods are automatically triggered.
- Internally, the values are stored as `_email` and `_pass`.
- When you try to get `email` or `password`, the `get` methods return the formatted values.

📗 Important property/concept used:
🔹 `get` — Allows you to define a method that is called when you access a property.
🔹 `set` — Allows you to define a method that is called when you assign a value to a property.
🔹 `this._propertyName` — Used as a convention to store the actual value privately inside the class (since JavaScript doesn't support truly private properties without `#` syntax).
*/

// Creating a class named 'user'
class user {
    // Constructor: called when a new instance is created using `new user(...)`
    constructor(email, password) {
        // These assignments trigger the corresponding setter methods below
        this.email = email;     // Triggers the set email() method
        this.password = password; // Triggers the set password() method
    }

    // Getter for password: called when you access `userOne.password`
    get password() {
        // Returns the actual password (stored in _pass) with "suvro" appended
        return  `${this._pass}suvro`;
    }

    // Setter for password: called when `this.password = value` is used
    set password(value) {
        // From where does `value` come?
        // ➤ The value comes from the argument passed when creating the user, i.e., `new user("email", "password")`
        // ➤ Specifically, `this.password = password` in the constructor triggers this setter with `password` as `value`
        this._pass = value; // Stores the raw password in a "private-like" property
    }

    // Getter for email: called when you access `userOne.email`
    get email() {
        // Returns the email in uppercase
        return  this._email.toUpperCase();
    }

    // Setter for email: called when `this.email = value` is used
    set email(value) {
        // From where does `value` come?
        // ➤ The value comes from the constructor argument, i.e., `new user("ss@gmail.com", ...)`
        this._email = value; // Stores the raw email in a "private-like" property
    }
}

// Creating an instance of the user class
const userOne = new user("ss@gmail.com", "12adf");

// Accessing the password, triggers the get password() method
console.log(userOne.password); // Output: "12adfsuvro"

// Accessing the email, triggers the get email() method
console.log(userOne.email);    // Output: "SS@GMAIL.COM"
