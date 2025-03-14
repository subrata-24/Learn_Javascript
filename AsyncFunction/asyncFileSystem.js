const fs = require("fs"); // Import the file system module

// Asynchronous function: `fs.readFile` starts reading "a.txt" in the background.
// It does NOT block the execution of the next lines of code.
fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data); // This will execute later, after the file read is complete.
});

console.log("Hello world"); // This executes immediately because `fs.readFile` is non-blocking.

// Synchronous operation: This `for` loop runs on the main thread and takes a long time.
// Since JavaScript is single-threaded, it will fully execute BEFORE handling any async callbacks.
let ans = 0;
for (let i = 0; i < 1000000000; i++) 
    ans++;

console.log("What is your name??"); // This executes only after the loop completes.

// The file read callback (from `fs.readFile`) will execute **only after** all synchronous code is done.
// Even if "a.txt" is read early, the event loop will not process the callback until the for-loop finishes.
