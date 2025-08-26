// -----------------------------------
// for...of loop with an array
// -----------------------------------

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

for (const it of myArray) {
    console.log(it); // Logs each number from the array
}

// ✅ `for...of` is ideal for iterating through arrays
// It gives you each element directly (not the index)


// -----------------------------------
// for...of loop with a string
// -----------------------------------

const greetings = "Hello World!";

for (const greet of greetings) {
    if (greet == " ") {
        console.log("It is an empty space, nothing more");
        continue; // Skips the rest of the loop for this iteration
    }
    console.log(`Each char of greeting is ${greet}`);
}

// ✅ Strings are iterable, so `for...of` works to get each character


// -----------------------------------
// for...of loop with Map
// -----------------------------------

const map = new Map();
map.set("Bn", "Bangladesh");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("Bn", "Bangladesh"); // Duplicate key — will overwrite previous

// console.log(map); // Uncomment to see full map structure

for (const [key, value] of map) {
    console.log(key, ':-', value); // Logs each key-value pair
}

// ✅ `for...of` works perfectly with Maps
// You get [key, value] pairs directly


// -----------------------------------
// ❌ Invalid use of for...of with plain object
// -----------------------------------

const myObject = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    swift: "swift by apple"
};

// ❌ This will throw an error:
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// ✅ FIX: Convert object to iterable using Object.entries()
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value);
}

// ✅ Object.entries(obj) returns an array of [key, value] pairs,
// which can then be iterated using `for...of`

