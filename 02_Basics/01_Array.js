// Creating arrays
const myArr = [0, 1, 2, 3, 4, 5]; // An array with numbers from 0 to 5
const myHeors = ["shaktiman", "naagraj"]; // An array containing hero names

const myArr2 = new Array(1, 2, 3, 4); // Creating an array using the Array constructor
// console.log(myArr[1]); // Accessing the element at index 1 (output: 1)

// ===================== Array Methods =====================

// `push()` adds one or more elements to the end of the array and returns the new length of the array
// myArr.push(6); // Adds 6 to the end of `myArr`
// myArr.push(7); // Adds 7 to the end of `myArr`

// `pop()` removes the last element from the array and returns it
// myArr.pop(); // Removes the last element (7) from the array

// `unshift()` adds one or more elements to the beginning of the array and returns the new length of the array
// myArr.unshift(9); // Adds 9 to the beginning of `myArr`

// `shift()` removes the first element from the array and returns it
// myArr.shift(); // Removes the first element from the array

// `includes()` checks if the specified element is present in the array and returns `true` or `false`
// console.log(myArr.includes(9)); // Checks if 9 is in `myArr`

// `indexOf()` returns the first index at which a given element can be found, or -1 if it's not present
// console.log(myArr.indexOf(3)); // Finds the index of 3 in `myArr`

// `join()` joins all elements of an array into a string, separated by commas (by default) or a specified separator
// const newArr = myArr.join(); // Joins elements of `myArr` into a comma-separated string
// console.log(myArr);  // Logs the original array (unchanged)
// console.log(newArr); // Logs the resulting string (joined array)

// ===================== Slice and Splice =====================

// `slice()` returns a shallow copy of a portion of the array, without modifying the original array.
// It takes two arguments: the start index (inclusive) and the end index (exclusive).

console.log("A ", myArr); // Logs the original array: [0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3); // Extracts elements from index 1 to 2 (not including 3)
// myn1 will contain [1, 2], but `myArr` remains unchanged

console.log(myn1); // Logs the sliced array: [1, 2]
console.log("B ", myArr); // Logs the original array again to show it's unchanged: [0, 1, 2, 3, 4, 5]

// `splice()` removes or replaces elements in an array and modifies the original array.
// It takes two arguments: the start index and the number of elements to remove.

const myn2 = myArr.splice(1, 3); // Removes 3 elements starting from index 1 (i.e., 1, 2, 3)
// After this operation, `myArr` is modified, and the removed elements are stored in `myn2`

console.log("C ", myArr); // Logs the modified array: [0, 4, 5]
console.log(myn2); // Logs the removed elements: [1, 2, 3]
