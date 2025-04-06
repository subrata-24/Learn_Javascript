const userEmail = [];

// This will run because [] (an empty array) is truthy in JavaScript
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// -------------------------------
// Falsy Values in JavaScript:
// These evaluate to false in conditional statements

// false
// 0
// -0
// 0n (BigInt zero)
// ""
// null
// undefined
// NaN

// Examples:
if (!false) console.log("false is falsy");
if (!0) console.log("0 is falsy");
if (!"") console.log("Empty string is falsy");
if (!null) console.log("null is falsy");
if (!undefined) console.log("undefined is falsy");
if (!NaN) console.log("NaN is falsy");

// -------------------------------
// Truthy Values in JavaScript:
// These evaluate to true in conditional statements

// "0"            → non-empty string
// "false"        → non-empty string
// " "            → whitespace string
// []             → empty array
// {}             → empty object
// function(){}   → any function
// Infinity, -Infinity
// new Date()
// all non-zero numbers (positive or negative)

if ("0") console.log('"0" is truthy');
if ("false") console.log('"false" is truthy');
if (" ") console.log('Whitespace string is truthy');
if ([]) console.log("Empty array is truthy");
if ({}) console.log("Empty object is truthy");
if (function () {}) console.log("Function is truthy");
if (Infinity) console.log("Infinity is truthy");

// -------------------------------
// Check if array is empty
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// -------------------------------
// Check if object is empty

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// -------------------------------
// Nullish Coalescing Operator (??)
// Returns the first defined (not null or undefined) value

let val1;

val1 = null ?? undefined ?? 10 ?? 50;

console.log(val1); // Output: 10

// -------------------------------
// Ternary Operator Example

const price = 100;

// If price <= 50, print it's affordable, else say it's expensive
price <= 50 ? console.log("Ok!! I can bear.") : console.log("This is beyond my ability.");
