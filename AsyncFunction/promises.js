// Import the 'fs' module to read files asynchronously
const fs = require("fs");

/**
 * simmy() function:
 * - Returns a new Promise.
 * - Uses fs.readFile() to read "a.txt" asynchronously.
 * - Resolves the Promise with the file content once reading is complete.
 */
function simmy() {
    return new Promise(function(resolve) {  // Create a Promise
        fs.readFile("a.txt", "utf-8", function (err, data) {  // Read file asynchronously
            resolve(data);  // Resolve the Promise with file content
        });
    });
}

/**
 * onData() function:
 * - Takes 'data' as an argument.
 * - Logs the received data (content of "a.txt") to the console.
 */
function onData(data) {
    console.log(data);
}

// Call simmy() which returns a Promise and handle the resolved data with onData()
const a = simmy().then(onData);

// This logs the Promise object to the console immediately
console.log(a);
