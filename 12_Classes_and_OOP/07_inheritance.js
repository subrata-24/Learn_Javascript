/* 
What is inheritance?
➡️ Inheritance is a feature in object-oriented programming where one class 
(child/subclass) can use properties and methods of another class (parent/superclass).

What it does?
➡️ It allows code reuse and establishes relationships like "is-a" (e.g., a teacher *is a* user).

How it does?
➡️ In JavaScript:
   - The `extends` keyword allows one class to inherit from another.
   - The `super()` function is used inside the child constructor to call the parent constructor.
   - The child class can override or add new methods on top of the inherited ones.
*/

// Parent class: user
class user {
    constructor(username) {
        this.username = username;  // assign passed username to the object
    }

    // Method to log the username
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

// Child class: teacher extends (inherits from) user
class teacher extends user {
    // Constructor of teacher accepts 3 arguments
    constructor(username, email, password) {
        // Call parent (user) class constructor using super()
        // This is required before using `this` in child constructor
        super(username); // passes username to the parent class constructor

        // Additional properties for teacher
        this.email = email;
        this.password = password;
    }

    // New method only in teacher class
    addCourse() {
        console.log(`A new course is added by ${this.username}`);
    }
}

// Create an instance of teacher
const teacherOne = new teacher("Suvro", "suvro@gmail.com", "123");

// Call method from teacher class
// Output: A new course is added by Suvro
teacherOne.addCourse();

// Call method inherited from user class
// Output: Username is Suvro
teacherOne.logMe();

// Create an instance of user class
const userOne = new user("Dhur");

// Call method from user class
// Output: Username is Dhur
userOne.logMe();


// Comparisons and instanceof checks:

// Check if teacherOne and userOne are strictly equal (false, because they are different objects)
// console.log(teacherOne === userOne)

// Check if teacherOne and the class `teacher` are strictly equal (false, one is object, one is class constructor)
// console.log(teacherOne === teacher)

// Check if teacherOne is an instance of teacher class (true, because created from teacher)
// console.log(teacherOne instanceof teacher)

// Check if teacherOne is an instance of user class (also true, because teacher extends user)
console.log(teacherOne instanceof user); // ✅ true
