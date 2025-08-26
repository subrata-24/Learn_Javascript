// ------------------------
// Basic for loop example (print on same line)
// ------------------------

for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        console.log("\n5 is the best number"); // Still log a message when 5 is found
    }

    // Print each number with a space, without a newline
    process.stdout.write(element + " ");
}
console.log(); // Move to a new line after loop finishes

// Note: Can't access 'element' outside the loop (block scope)


// ------------------------
// Nested for loops example
// ------------------------

// Printing multiplication tables from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // Multiplication table format: 2 * 3 = 6
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


// ------------------------
// Looping through an array
// ------------------------

let myArray = ["flash", "batman", "superman"];
console.log(`Array length: ${myArray.length}`);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); // Logs each superhero name
}


// ------------------------
// break and continue demo
// ------------------------

// BREAK EXAMPLE: Stops the loop entirely when condition is met
console.log("---- Break Example ----");
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5 - stopping loop`);
        break; // Terminates the loop completely
    }
    console.log(`Value of i is ${index}`);
}

// CONTINUE EXAMPLE: Skips current iteration and continues
console.log("---- Continue Example ----");
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5 - skipping`);
        continue; // Skips only this iteration when index is 5
    }
    console.log(`Value of i is ${index}`);
}

