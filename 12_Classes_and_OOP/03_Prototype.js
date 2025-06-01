/*
What is prototype?
✅ Answer:
A prototype is a built-in mechanism in JavaScript that allows objects to inherit 
features (properties and methods) from other objects.

What it does?
✅ Answer:
It lets you attach shared methods or properties to objects — especially useful when 
creating many instances (like arrays, objects, etc.) so they all share the same methods 
without duplicating them.The array,object,function can accesss a common method by this.

How it does?
✅ Answer:
Every JavaScript object has an internal `[[Prototype]]` (accessible using `__proto__` or `Object.getPrototypeOf()`).
When you access a property or method on an object:
- JavaScript first looks for it on the object itself.
- If it doesn't find it, it searches the object's prototype.
- This process continues up the "prototype chain" until found or until it reaches `null`.

Work flow:
✅ Answer:
1. An object is created.
2. It inherits from a prototype (like `Object.prototype` or `Array.prototype`).
3. If you call a method (e.g. `myArray.push()`), JS looks at `myArray`.
4. If not found, it looks at `Array.prototype`.
5. You can also manually add methods to prototypes, and all objects of that type will 
have access to them.

*/

// Creating an array of heroes
let myHero = ["Captain", "Thor"]; 
// ➤ This is an array (which inherits from Array.prototype)

// Creating an object containing hero names and their powers
const heroPower = {
    Captain: "Shield",  // property: Captain has a shield
    Thor: "Hammer",     // property: Thor has a hammer

    getSpiderPower: function () {
        // method to print Thor’s power using `this`
        console.log(`Thor power is ${this.Thor}`);
        // ➤ `this.Thor` refers to the `Thor` property of `heroPower`
    }
}

// Extending Object prototype — this adds a method available to ALL objects
Object.prototype.subrata = function(){
    // ➤ Every object in JS can now use `subrata()` method
    console.log(`Subrata is present in all object`);
}

// heroPower.subrata()
// ➤ This would work because `heroPower` is an object, and it inherits from Object.prototype

// myHero.subrata()
// ➤ This also works because arrays are objects, so they also inherit from Object.prototype

// Extending only Array prototype
Array.prototype.heySubrata = () => {
    console.log(`Hello Subrata`);
    // ➤ This will only be available to arrays, not plain objects
}

myHero.heySubrata();
// ✅ Works because `myHero` is an array, which inherits from Array.prototype

// heroPower.heySubrata()
// ❌ Will fail because `heroPower` is not an array

// ❓ What is inheritance?
// ✅ ANSWER:
// Inheritance is a way to make one object access properties and methods from another object.
// JS uses **prototypal inheritance** — not classical inheritance like Java or C++.
// Objects inherit from other objects using the prototype chain.

const User = {
    username: "Nai",         // property: username
    email: "nai@gmail.com"   // property: email
}

const teacher = {
    teacher: "Subrata"       // property: teacher
}

// A third object with one property
const teachingSupport = {
    video: true              // property: has video support
}

const TAsupport = {
    available: false,        // property: TA is available or not

    __proto__: teachingSupport
    // ➤ Older syntax for setting prototype
    // ➤ `TAsupport` inherits from `teachingSupport`, so it can access `.video`
}

teacher.__proto__ = User;
// ➤ This means `teacher` can now access `username` and `email` via its prototype

// ✅ Modern syntax (better practice than using __proto__)
Object.setPrototypeOf(TAsupport, User);
// ➤ Now TAsupport also inherits from User, so it can access `username` and `email`

// Creating a string with extra spaces
let myName = "Subrata   Biswas     ";

// Adding a method to String prototype
String.prototype.trueLength = function() {
    // `this` here refers to the actual string object on which the method is called
    console.log(`This means ${this}`);
    // ➤ Shows the full string (including spaces)

    console.log(`True length is ${this.trim().length}`);
    // ➤ `trim()` removes extra spaces from both ends
    // ➤ `length` gives the number of characters after trimming
}

// Call `trueLength()` on the variable
myName.trueLength();
// ➤ Prints the raw string and trimmed length

// You can also use the method directly on string literals:
"Biswas    ".trueLength();
// ➤ This works because string literals are temporarily converted to String objects
