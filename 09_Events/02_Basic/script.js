// This is an example function that logs a message to the console
    // Note: This function is not used in the code below (just kept for reference/testing)
    // If you call sayHi() directly in setTimeout, it runs immediately.
    /*
    function sayHi(){
        console.log("Hello Subrata!");
    }
  
    setTimeout(sayHi(), 2000); // ❌ Incorrect: sayHi() runs immediately, returns undefined
    setTimeout(sayHi, 2000);   // ✅ Correct: passes function reference, runs after 2 seconds
    */

    // Function to change the text content of the <h1> element
    const changeHeading = function () {
        document.querySelector('h1').innerHTML = "Hello Subrata!";
    };

    // Schedule the changeHeading function to run after 2 seconds
    // Important: We pass the function reference (changeHeading), NOT changeHeading()
    // changeHeading() would execute immediately instead of waiting
    const changeSet = setTimeout(changeHeading, 2000);

    // Add an event listener to the "stop" button
    // If the button is clicked before 2 seconds, we cancel the scheduled heading change
    document.querySelector('#stop').addEventListener('click', () => {
        // Cancel the scheduled setTimeout by passing its ID
        clearTimeout(changeSet);

        // Log to the console to indicate the timeout was cleared
        console.log("stop");
    });
