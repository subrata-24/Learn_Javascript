const marvelHeros = ["Thor", "Captain", "Ironman"]; // An array of Marvel heroes
const dcHeros = ["superMan", "batMan", "flash"]; // An array of DC heroes

// Using `push` to add `dcHeros` array as a single element into `marvelHeros`
// marvelHeros.push(dcHeros); // This pushes the entire `dcHeros` array as a single element inside `marvelHeros`.
// console.log(marvelHeros);  // Output: ["Thor", "Captain", "Ironman", Array(3)]
// console.log(marvelHeros[3]); // Output: ["superMan", "batMan", "flash"]

// Using `concat` method to merge `marvelHeros` and `dcHeros` into a new array
// `concat` returns a **new combined array** without modifying the original arrays.
marvelHeros.concat(dcHeros); // This doesn't change `marvelHeros` because `concat` returns a new array.

// Storing the result of `concat` in a new array `allHeros`
const allHeros = marvelHeros.concat(dcHeros); 
// console.log(allHeros); // Output: ["Thor", "Captain", "Ironman", "superMan", "batMan", "flash"]

// Using the spread operator to combine two arrays into a new array
const all_new_heros = [...marvelHeros, ...dcHeros]; 
// console.log(all_new_heros); // Output: ["Thor", "Captain", "Ironman", "superMan", "batMan", "flash"]

// `flat()` method is used to flatten a nested array into a single array.
// It takes an optional depth argument. `Infinity` flattens arrays of any nesting level.
const anotherArray = [1, 2, [2, 3, 4, 5], 6, 7, [8, 9, 10, [11, 12, 13]]];
const real_anotherArray = anotherArray.flat(Infinity); // Flatten the nested array completely
// console.log(real_anotherArray); // Output: [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// `Array.isArray()` checks whether the given value is an array or not. It returns `true` if the value is an array.
console.log(Array.isArray("subrata")); // Output: false (since "subrata" is a string)

// `Array.from()` creates a new array from an iterable (like a string) or array-like object.
console.log(Array.from("subrata")); // Output: ['s', 'u', 'b', 'r', 'a', 't', 'a'] (creates an array of characters from the string)

// `Array.from()` on an object that is not array-like or iterable will not behave as expected.
console.log(Array.from({ name: "subrata" })); // Output: [] (since the object is not iterable)

// `Array.of()` creates a new array from a list of arguments (unlike `Array()` which can behave differently with numbers)
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300] (creates an array containing the given values)
