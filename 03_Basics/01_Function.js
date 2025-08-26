// Function to print each letter of the name "SUBRATA" one by one
function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("B");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("A");
}

// sayMyName(); // Uncomment this line to execute the function


// Function to add two numbers and return the sum
function addTwoNumbers(number1, number2){
    // let result = number1 + number2  // Alternative way to store and return
    return number1 + number2;  // Directly returning the sum
}

const result = addTwoNumbers(3, 5); // Storing the result of the function in a variable
// console.log("Result: ", result); // Uncomment to print the result


// Function to display a login message, default username is "sam"
function loginUserMessage(username = "sam"){
    if(!username){ // If username is empty, prompt the user
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`; // Returning login message
}

// console.log(loginUserMessage("Subrata")); // Uncomment to print login message
// console.log(loginUserMessage()); // Uncomment to check default parameter.If no 
//argument is passed then it return undefined.


// Function using rest parameters to take multiple shopping cart values as input
function calculateShoppingCartPrice(...num) {
    return num;  // Returns an array of all values passed as arguments
}

console.log(calculateShoppingCartPrice(200, 300, 400, 500)); // Output: [200, 300, 400, 500]


// Object containing customer details
const customer = {
    customerName: "Subrata Biswas", // Customer's name
    expense: 199 // Expense amount
}

// Function to handle and display customer details from an object
function handleObject(anyObject) {
    console.log(`Customer name is ${anyObject.customerName} and he spent ${anyObject.expense} taka.`);
}

handleObject(customer); // Calling function with the customer object

// handleObject({
//     customerName: "Subrata Biswas",
//     expense: 199
// }); // Uncomment to call function with an object directly


// Array containing numeric values
const newArray = [100, 200, 300, 400];

// Function to retrieve the second element of an array
function handleArray(getArrayElement) {
    return getArrayElement[1]; // Returning second element of the array
}

// console.log(handleArray(newArray)); // Uncomment to print second element from the newArray
console.log(handleArray([100, 200, 300, 400])); // Output: 200
