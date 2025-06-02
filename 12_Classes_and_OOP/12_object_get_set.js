/* 
📌 What is this code about?
This code defines an object with **getter and setter methods**, and then creates another object using `Object.create()` that inherits from it.

📘 What topic does it cover?
- Getters and setters inside object literals
- `Object.create()` for prototype-based inheritance
- Encapsulation using underscore (`_email`) convention

🔧 What does the code do?
- Defines a `User` object with `_email`, `_password`, and a getter/setter for `email`
- Creates another object `tea` that **inherits** from `User`
- Accesses the `email` property of `tea`, which uses the inherited `get email()` method

⚙️ How does it work?
- `Object.create(User)` creates a new object with `User` as its prototype
- When you access `tea.email`, JavaScript looks for `email` in `tea`
  → Not found, so it checks the prototype (`User`)
  → Finds the `get email()` method there
  → Calls it in the context of `tea`, so `this._email` looks for `_email` in `tea`
  → Not found in `tea`, so it uses `_email` from the prototype `User`
- Thus, the getter returns `User._email.toUpperCase()`

📗 Important concepts used:
🔹 `get` and `set`: Special functions used as property accessors in objects.
🔹 `Object.create(proto)`: Creates a new object and sets the given `proto` as its prototype.
🔹 `this`: Refers to the object from which the property is accessed — in this case, `tea`.

📢 Common Pitfall:
- `tea` doesn't have its own `_email`, it accesses the one from `User` unless overridden.
- If you later assign `tea.email = "new@email.com"`, it will add `_email` to `tea`'s own properties.

*/


// Define an object `User` with internal (private-like) properties and accessors
const User = {
    _email: 'h@hc.com',        // Internal property holding email (not directly exposed)
    _password: "abc",          // Internal password (not used in this code)

    // Getter for `email` — triggered when `User.email` or `tea.email` is read
    get email(){
        return this._email.toUpperCase();  // Returns email in uppercase
    },

    // Setter for `email` — triggered when `User.email` or `tea.email` is assigned
    set email(value){
        this._email = value;  // Updates `_email` on the calling object (`this`)
    }
}

// Create a new object `tea` that inherits from `User`
const tea = Object.create(User);
// `tea` now uses `User` as its prototype, inheriting all properties and methods

// Access the email property of `tea`
// ➤ Since `tea` has no own `email` property, the getter from prototype (`User`) is called
// ➤ Inside the getter, `this` refers to `tea`
// ➤ `tea` doesn't have its own `_email`, so it uses `_email` from the prototype (`User`)
console.log(tea.email); 
// ➤ Outputs: "H@HC.COM"
