console.log("1️⃣ Math.random() - Generate a random number between 0 and 1");
console.log(Math.random()); // Example: 0.7543

console.log("\n2️⃣ Math.floor() - Rounds a number down to the nearest integer");
console.log(Math.floor(4.9)); // Output: 4
console.log(Math.floor(-4.9)); // Output: -5

console.log("\n3️⃣ Math.ceil() - Rounds a number up to the nearest integer");
console.log(Math.ceil(4.1)); // Output: 5
console.log(Math.ceil(-4.1)); // Output: -4

console.log("\n4️⃣ Math.round() - Rounds a number to the nearest integer");
console.log(Math.round(4.4)); // Output: 4
console.log(Math.round(4.6)); // Output: 5

console.log("\n5️⃣ Math.trunc() - Removes the decimal part of a number");
console.log(Math.trunc(4.9)); // Output: 4
console.log(Math.trunc(-4.9)); // Output: -4

console.log("\n6️⃣ Math.min() - Returns the smallest number from a set");
console.log(Math.min(10, 5, 2, 8)); // Output: 2

console.log("\n7️⃣ Math.max() - Returns the largest number from a set");
console.log(Math.max(10, 5, 2, 8)); // Output: 10

console.log("\n8️⃣ Math.pow() - Returns base raised to exponent (base^exp)");
console.log(Math.pow(2, 3)); // Output: 8 (2^3)

console.log("\n9️⃣ Math.sqrt() - Returns the square root of a number");
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.sqrt(25)); // Output: 5

console.log("\n🔟 Math.abs() - Returns the absolute (positive) value of a number");
console.log(Math.abs(-10)); // Output: 10
console.log(Math.abs(10)); // Output: 10

console.log("\n1️⃣ 1️⃣ Math.sign() - Returns 1 (positive), -1 (negative), or 0");
console.log(Math.sign(10)); // Output: 1
console.log(Math.sign(-10)); // Output: -1
console.log(Math.sign(0)); // Output: 0

console.log("\n1️⃣ 2️⃣ Math.PI - Returns the value of Pi (π)");
console.log(Math.PI); // Output: 3.141592653589793

console.log("\n1️⃣ 3️⃣ Math.E - Returns Euler's number (e)");
console.log(Math.E); // Output: 2.718281828459045

console.log("\n1️⃣ 4️⃣ Math.log() - Returns the natural logarithm (ln)");
console.log(Math.log(Math.E)); // Output: 1

console.log("\n1️⃣ 5️⃣ Math.sin(), Math.cos(), Math.tan() - Trigonometric functions");
console.log(Math.sin(Math.PI / 2)); // Output: 1
console.log(Math.cos(0)); // Output: 1
console.log(Math.tan(Math.PI / 4)); // Output: 1

console.log("\n1️⃣ 6️⃣ Generate a random integer between two values (5 to 10)");
const min = 5, max = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
