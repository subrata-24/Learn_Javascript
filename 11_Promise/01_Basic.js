// ✅ Promise One - Basic Promise example with setTimeout
const promiseOne = new Promise((resolve, reject) => {
    // Simulate an async task using setTimeout
    setTimeout(() => {
        console.log("Promise One Resolved"); // Logs this message after 1 second
        resolve(); // Mark the promise as fulfilled (successful)
    }, 1000);
});

// Handle the result when promiseOne is resolved
promiseOne.then(function () {
    console.log("Promise One Resolved"); // This runs after the internal resolve()
});


// ✅ Promise Two - Promise is declared and resolved immediately
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2"); // Prints after 1 second
        resolve(); // Promise fulfilled
    }, 1000);
}).then(function () {
    console.log("Async task 2 resolved"); // This logs after the previous resolve()
});


// ✅ Promise Three - Passing data with resolve()
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "subrata-24",
            email: "subrata17@ac.pstu.ac.bd",
        }); // Resolving the promise with an object (can be any data)
    }, 1000);
});

// Receiving the resolved data
promiseThree.then((data) => {
    console.log(data); // Logs the object: { username: "...", email: "..." }
});


// ✅ Promise Four - Handling both resolve and reject
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false; // Change this to true to simulate an error
        if (!error) {
            resolve({
                username: "Biswas",
                email: "sb823249@gamil.com"
            }); // If no error, resolve with user data
        } else {
            reject("Error: Something went wrong"); // If error, reject with a message
        }
    }, 1000);
});

// Chaining `.then()`, `.catch()`, and `.finally()`
promiseFour
    .then((data) => {
        console.log(data);          // Logs the user object
        return data.email;          // Returning email to the next then()
    })
    .then((email) => {
        console.log(email);         // Logs the email only if previous resolve() succeeded
    })
    .catch((error) => {
        console.log(error);         // Logs the error if rejected
    })
    .finally(() => {
        // Always runs whether promise resolved or rejected
        console.log("The promise may be resolved or rejected but at last it always goes to finally block");
    });


// ✅ Promise Five - Using async/await to handle Promises
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true; // Change to false to simulate success
        if (!error) {
            resolve({
                username: "Javascript",
                Pass: "12345678"
            });
        } else {
            reject("Error: This JS shows error"); // Simulating an error
        }
    }, 1000);
});

async function consumePromiseFive() {
    // 🔴 What if I do not use try/catch here?
    // Then if the promise rejects, JavaScript will throw an unhandled rejection error.
    // It can crash your app or show unwanted errors in console.
    try {
        const data = await promiseFive; // Await pauses until promise resolves or rejects
        console.log(data); // Only prints if resolved
    } catch (error) {
        console.log(error); // Catches and prints any error (if promise rejects)
    }
}

consumePromiseFive(); // Call the async function


// 🔒 This part is commented out as per your note, but I'll explain it

// async function consumePromiseSix(params) {
//    try {
//        const data = await fetch("https://jsonplaceholder.typicode.com/users");
//        const response = await data.json(); // Parsing the raw response body
//        console.log(response); // Logs the actual user data
//    } catch (error) {
//        console.log("Error: ", error); // Handles any fetch or parsing error
//    }
// }

// consumePromiseSix();


// ✅ Direct fetch() example using Promises
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        // ❓ Why we do not use await here?
        // Because we're still using `.then()` syntax, which is promise-based.
        // `await` is used inside async functions only.
        return response.json(); // Parse the response stream into JSON
    })
    .then((data) => {
        console.log(data); // Logs the user data from the API
    })
    .catch((error) => {
        console.log(error); // Catches network errors or JSON parsing issues
    });
