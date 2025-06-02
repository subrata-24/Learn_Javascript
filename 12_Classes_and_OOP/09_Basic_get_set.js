// What is the purpose of the code ?
// 👉 This code demonstrates how JavaScript handles object property descriptors.
//    It shows how we can inspect and modify attributes like `writable`, `enumerable`, and `configurable`
//    using `Object.getOwnPropertyDescriptor()` and `Object.defineProperty()`.

// What Topic is discussed in the code ?
// 👉 The code discusses the topic of **Property Descriptors in JavaScript objects**.
//    Specifically, it covers:
//    - Built-in object properties like Math.PI
//    - Custom object property control
//    - Controlling property visibility and writability

// What is its working?
// 👉 First, it shows how `Math.PI` is protected and can’t be changed.
// 👉 Then it defines a custom `user` object and modifies its `username` property to be non-writable and non-enumerable.
// 👉 It also shows how that affects iteration and assignment.


// ===========================================
// Example: Math.PI (built-in constant)
// ===========================================

// console.log(Math.PI) 
// ✅ Uncommenting this would print 3.141592653589793 — the real value of π

Math.PI = 5  // ❌ Attempting to change Math.PI (will silently fail in non-strict mode)
// Math.PI is a read-only property (non-writable), so its value cannot be reassigned

// console.log(Math.PI); 
// ✅ Uncommenting this would still print 3.141592653589793, because the assignment above failed


// ===========================================
// Get Property Descriptor for Math.PI
// ===========================================

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// This line uses Object.getOwnPropertyDescriptor to inspect the internal attributes (flags) of Math.PI
// These include:
// - writable: false     ✅ can't be changed
// - enumerable: false   ✅ won't appear in loops
// - configurable: false ✅ can't be deleted or reconfigured

// console.log(descriptor) 
// ✅ Uncommenting this would print:
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }


// ===========================================
// Custom object: user
// ===========================================

const user = {
    username: "Dhur",          // a normal property: writable, enumerable, configurable by default
    price: 500,
    mail: "123@gmail.com",

    isAvailable: function () {
        connsole.log("Noooooooooooooo") 
    }
}


// ===========================================
// View Property Descriptor for `username`
// ===========================================

console.log(Object.getOwnPropertyDescriptor(user, "username"));
// ✅ This prints the descriptor for `username`, e.g.:
// {
//   value: "Dhur",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }


// ===========================================
// Make `username` non-writable and non-enumerable
// ===========================================

Object.defineProperty(user, 'username', {
    writable: false,    // ❌ Cannot change the value anymore
    enumerable: false   // ❌ Will not show up in `for...in` or `Object.entries()`
    // Note: configurable defaults to false if not explicitly set
})


// ===========================================
// Try changing the value of `username`
// ===========================================

user.username = "changeKro" 
// ❌ This assignment will silently fail (in non-strict mode) because `writable: false`
// ✅ In strict mode, this would throw a TypeError


// ===========================================
// Check updated descriptor after defining
// ===========================================

console.log(Object.getOwnPropertyDescriptor(user, "username"))
// ✅ This now prints:
// {
//   value: "Dhur",
//   writable: false,
//   enumerable: false,
//   configurable: true (if not explicitly set to false)
// }


// ===========================================
// Loop over object properties
// ===========================================

for (let [key, value] of Object.entries(user)) {
    if (typeof value !== 'function')         // 🔍 Only log non-function properties
        console.log(`${key} : ${value}`)     // Will not show `username` because it is now non-enumerable
}

// 🔍 `Object.entries(user)` only includes enumerable properties
// 🔍 Since we made `username` non-enumerable, it is skipped in the loop

/* 🧠 Beginner Tips:

1. `writable: false` → you can't change the value anymore.
2. `enumerable: false` → it disappears from `for...in`, `Object.keys()`, `Object.entries()`, etc.
3. `Object.defineProperty()` is very powerful for protecting object internals.
4. Always check `Object.getOwnPropertyDescriptor()` to debug weird behavior like "why is my property not showing up?"

*/
