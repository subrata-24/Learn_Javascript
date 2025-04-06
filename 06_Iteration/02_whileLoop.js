// ------------------------
// WHILE LOOP EXAMPLE
// ------------------------

let index = 0;

// The while loop runs as long as the condition is true
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2; // Increment by 2
}

// Output:
// Value of index is 0
// Value of index is 2
// ...
// Value of index is 10

// ------------------------
// WHILE LOOP WITH ARRAY
// ------------------------

let myArray = ['flash', 'batman', 'superman'];
let arr = 0;

// Loop through array using while
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`); // Access each element
    arr = arr + 1;
}

// Output:
// Value is flash
// Value is batman
// Value is superman

// ------------------------
// DO...WHILE LOOP EXAMPLE
// ------------------------

let score = 11;

// do...while loop runs the block at least once before checking the condition
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

// Output:
// Score is 11

// 🔥 IMPORTANT:
// Even though the condition (score <= 10) is false initially,
// the `do` block runs once. This is the key difference from a regular while loop.
