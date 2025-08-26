/* 
What is static properties?
→ Static properties or methods belong to the class itself, not to instances of the class.

What it does?
→ A static method can be called directly on the class without creating an object 
(instance) of the class.
→ It is commonly used for utility functions or configuration methods that are not tied 
to any particular object.

How it does?
→ In JavaScript, you define static methods using the `static` keyword inside the class.
→ These methods are stored directly on the class constructor (not on the prototype), 
so instances cannot access them.
*/

class User {
    constructor(username){
        // This constructor is called automatically when a new object is created using `new User(...)`
        // `this.username` is assigned the value passed into the constructor
        this.username = username;
    }

    logMe(){
        // Instance method: Prints the username of the current object
        // Triggered when you call `logMe()` on an object of `User`
        console.log(`Username: ${this.username}`);
    }

    // createId(){
    //     return `123`
    // }
    // ↑ This was a regular instance method (commented out).
    // If this was active, each object would have access to it via `object.createId()`

    static createId(){
        // This is a static method — belongs to the class, not to instances
        // You can call it like `User.createId()` directly on the class
        // It returns the string '123'
        return `123`;
    }
}

// Create a new instance of the User class with username "hitesh"
// This triggers the constructor and assigns "hitesh" to `this.username`
const hitesh = new User("hitesh")

// console.log(hitesh.createId())
// ↑ This line would throw an error because `createId()` is a static method,
// and static methods are not accessible on instances like `hitesh`

class Teacher extends User {
    constructor(username, email){
        // Call the parent class (`User`) constructor using super() to initialize `username`
        super(username);
        // Add a new property specific to Teacher class
        this.email = email;
    }
}

// Create an object of Teacher class
// This triggers Teacher's constructor → which calls User's constructor via super()
// So `username` is assigned by User class, and `email` is set by Teacher
const iphone = new Teacher("iphone", "i@phone.com")

// Call the static method createId()
// Even though `iphone` is an object, the method is not called from the object directly.
// Here, JavaScript internally looks up the prototype chain to find `createId()` defined on the class.
console.log(iphone.createId()); 
// Output: '123'
// Explanation: Although it's not recommended, this works in JS because `iphone` is instance of `Teacher` 
// and `Teacher` inherits from `User`, and `createId` is defined as static on `User`.
// So JS internally does: `Teacher.createId()` → which resolves via User class
// ⚠️ But again, it's clearer and safer to call: `User.createId()` or `Teacher.createId()`

/*
💡 Extra Notes:
- Static methods are NOT available on instances. Trying to call `hitesh.createId()` will throw an error.
- Use static methods for functionality that doesn't rely on instance properties (like helper utilities, factory methods).
- You can still access static methods via derived classes if inheritance is properly set up (like Teacher extends User).
*/
