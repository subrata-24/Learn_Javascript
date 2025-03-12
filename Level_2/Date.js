// Create a Date object representing the current date and time
const currentDate = new Date();

console.log("Current Date: " + currentDate); // Print the full date and time
console.log("Date: " + currentDate.getDate()); // Print the current day of the month

// The getMonth() method returns months in 0-based indexing (0 for January, 11 for December),
// so we add 1 to get the correct month number.
console.log("Month: " + (currentDate.getMonth() + 1));

//console.log(currentDate.getYear());// The getYear() method is deprecated and gives the year minus 1900.
// Instead, use getFullYear() to get the correct year.
console.log("Year: " + currentDate.getFullYear());

/* Using template literals (` `) to format the output.
   This method makes the code more readable and avoids using "+" for string concatenation. */
console.log(`Hours:  ${currentDate.getHours()}`); // Print the current hour
console.log(`Minute: ${currentDate.getMinutes()}`); // Print the current minute
console.log(`Seconds: ${currentDate.getSeconds()}`); // Print the current seconds

// The getTime() method returns the number of milliseconds since January 1, 1970 (Unix Epoch).
console.log("Milliseconds since 1970: " + currentDate.getTime());

/* Measuring the time taken by a function:
   The following code calculates the execution time of the sum() function. */
function sum() {
    let ans = 0;
    for (let i = 0; i < 100000; i++) // Loop from 0 to 99,999
        ans += i; // Add each number to ans
    return ans;
}

// Store the current time before calling the function
const beforeTime = new Date();
const beforeTimeMS = beforeTime.getTime();

// Call the sum function
sum();

// Store the current time after the function execution
const afterTime = new Date();
const afterTimeMS = afterTime.getTime();

// Calculate and print the time taken by the sum function in milliseconds
console.log(`Time taken by sum function: ${afterTimeMS - beforeTimeMS}ms`);

