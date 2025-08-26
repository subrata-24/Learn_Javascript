// ---------------------------------
// for...in loop with objects
// ---------------------------------

const myObject = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    swift: "swift by apple"
};

// Loop through keys of the object
for (const key in myObject) {
    console.log(`${key} is the extension for ${myObject[key]}`);
}

// ✅ for...in is best used with plain objects
// It gives you the keys (property names), which you can use to access values


// ---------------------------------
// for...in loop with arrays
// ---------------------------------

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(programming[key]); // Logs each language in the array
}

// ✅ for...in also works with arrays,
// but it's more common to use `for...of` or `forEach` for arrays
// `key` here refers to the index (like 0, 1, 2, ...)


// ---------------------------------
// for...in with Map (❌ won't work as expected)
// ---------------------------------

const map = new Map();
map.set("Bn", "Bangladesh");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("Bn", "Bangladesh"); // Duplicate key - will overwrite the previous

// ❌ for...in does NOT work with Map
// It won’t iterate over map entries
for (const key in map) {
    console.log(key); // Will not print anything
}

// ✅ Use for...of with Map instead:
console.log("Using for...of with Map:");
for (const [key, value] of map) {
    console.log(`${key} => ${value}`);
}

// ✅ Key takeaway:
// - Use `for...in` with objects (gets keys)
// - Use `for...of` with arrays or Maps (gets values or [key, value] pairs)
// - Maps maintain insertion order and allow any data type as key
