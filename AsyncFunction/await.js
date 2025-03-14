/**
 * simmy() function:
 * - Returns a Promise.
 * - Uses setTimeout() to simulate an asynchronous delay of 1 second.
 * - Resolves the Promise with the string "Hi there" after 1 second.
 */
function simmy() {
    const p = new Promise(function (resolve) {  // Create a new Promise
        setTimeout(function () {  // Simulate async delay
            resolve("Hi there");  // Resolve the Promise with a message
        }, 1000);
    });
    return p;  // Return the Promise
}

/**
 * main() function:
 * - Declared as `async` to use `await`.
 * - Calls simmy() and waits for its Promise to resolve.
 * - Logs the resolved value ("Hi there") to the console.
 */
async function main() {
    const val = await simmy();  // Wait until simmy() resolves
    console.log(val);  // Log the resolved value ("Hi there")
}

// Call the main function
main();
