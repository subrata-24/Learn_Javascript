const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// A simple map example (not used in final result, maybe for comparison or testing):
// This would return: [11, 12, 13, ..., 20]
// const myNums = myArray.map((num) => num + 10);

// Final transformation using method chaining
const myNums = myArray
  // Step 1: Multiply each number by 10
  // Input: [1, 2, 3, ..., 10]
  // Output: [10, 20, 30, ..., 100]
  .map((num) => num * 10)

  // Step 2: Add 10 to each of the above results
  // Input: [10, 20, 30, ..., 100]
  // Output: [20, 30, 40, ..., 110]
  .map((num) => num + 10)

  // Step 3: Filter the array to keep values >= 40
  // Input: [20, 30, 40, ..., 110]
  // Output: [40, 50, 60, ..., 110]
  .filter((num) => num >= 40);

// Final output: [40, 50, 60, 70, 80, 90, 100, 110]
console.log(myNums);
