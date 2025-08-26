// Create a Symbol with a description "key1"
const mySymbol = Symbol("key1"); 

// Define an object `myInfo` to store user information
const myInfo = {
    name: "Subrata",                     // User's first name
    "full name": "Subrata Biswas",       // User's full name (note the space in key)
    [mySymbol]: "myKey",                 // Using a Symbol as a key (unique property)
    age: 25,                            // User's age
    adress: "Barishal",                 // User's address
    email: "subrata17@cse.pstu.ac.bd",  // User's initial email address
    isLoggedIn: false,                  // Boolean indicating login status
    lastLogIn: ["Monday", "Friday"]     // Array holding last login days
};

// Accessing object properties using dot notation and bracket notation
// console.log(myInfo.email);             // Access email using dot notation
// console.log(myInfo["email"]);          // Access email using bracket notation
// console.log(myInfo["full name"]);      // Access "full name" using bracket notation
// console.log(typeof myInfo[mySymbol]);  // Access the value of the Symbol key and check its type

// Modifying the `email` property in the object
myInfo.email = "sb8232749@gmail.com";  // Change user's email address

// Freeze the object to prevent further modifications (currently commented out)
// Object.freeze(myInfo);               // Once frozen, any changes to `myInfo` will be ignored

myInfo.email = "subrata40four@gmail.com";  // Attempt to modify email (would fail if frozen)
// console.log(myInfo);                   // Display updated object after email change

// Adding a new property `married` to the object
myInfo.married = "YES";                  // New key-value pair indicating marital status

// Adding a method `greetings` to the object
myInfo.greetings = function () {         // Method to log a greeting message
    console.log("Hello JS User");
};

// Calling the `greetings` method
console.log(myInfo.greetings());         // Logs: "Hello JS User"

// Adding another method `greetingsTwo` to the object with a template literal
myInfo.greetingsTwo = function () {      // Method to log a customized greeting with address
    console.log(`Hello JS user, ${this.adress}`);  // Using `this` to access the object's address
};

// Calling the `greetingsTwo` method
console.log(myInfo.greetingsTwo());     // Logs: "Hello JS user, Barishal"

// Printing the final `myInfo` object with all modifications
console.log(myInfo);
