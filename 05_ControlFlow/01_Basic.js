// Check if user is logged in and define the temperature
const isUserloggedIn = true;
const temperature = 41;

// Example: Simple if-else based on temperature value
// if (temperature === 40) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// Comparison Operators Reference:
// <, >, <=, >=, ==, !=, ===, !==

// Example: Variable scope inside if-block
// const score = 200;

// if (score > 100) {
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }

// Below line would throw error because 'power' is block-scoped
// console.log(`User power: ${power}`);

// One-liner if statement using comma to execute multiple expressions
// const balance = 1000;

// Executes both console logs because balance > 500
// if (balance > 500) console.log("test"), console.log("test2");

// Multiple conditions with else-if ladder
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750"); // Probably a typo in message
// } else {
//     console.log("less than 1200");
// }

// Logical AND (&&) and OR (||) operations
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// Only allows course purchase if all conditions are true
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course"); // This won't execute because 2 == 3 is false
}

// Logs in user if logged in from either Google or Email
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
