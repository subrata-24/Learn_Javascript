// **What is JSON?**
// JSON (JavaScript Object Notation) is a lightweight data format used for storing and transferring data.
// It is easy for humans to read and write and easy for machines to parse and generate.
// JSON is commonly used in web applications to exchange data between a client and a server.

// **Why is JSON used?**
// - It is a text-based format, making it language-independent.
// - Used in APIs to send and receive data.
// - Easier to work with compared to XML due to its simplicity.

// **JSON.stringify()**
// This method converts a JavaScript object into a JSON string.
const user = {
    name: "Subrata Biswas",
    age: 24,
};

// Convert the JavaScript object `user` into a JSON-formatted string
const Info = JSON.stringify(user);
console.log(Info); // Output: {"name":"Subrata Biswas","age":24}
// Now, `Info` is a JSON string, not a JavaScript object.

// **JSON.parse()**
// This method converts a JSON string back into a JavaScript object.

const MyInfo = '{"name":"Subrata Biswas","age":"25"}'; // JSON string (data received from an API or file)
const makeObj = JSON.parse(MyInfo); // Convert JSON string into a JavaScript object

console.log(makeObj["name"]); // Output: Subrata Biswas
// Now, `makeObj` is a JavaScript object that can be accessed like any other object.
