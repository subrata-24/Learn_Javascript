const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// -------------------------
// Example 1: Summing numbers using reduce
// -------------------------

// Using reduce() to calculate the sum of the array
// Initial accumulator value is set to 5 (instead of the usual 0)
const totalValue = myArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  5 // Initial value of accumulator
);

console.log(totalValue); // Output: 60 (sum of 1 to 10 is 55, plus initial 5 = 60)

// If you wanted to debug the process step-by-step, you could use this version:
/*
const totalValue = myArray.reduce(function (accumulator, currentValue) {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 0);
*/

// -------------------------
// Example 2: Calculating total course price from array of objects
// -------------------------

const shoppingCourse = [
  {
    course: "js course",
    price: 3000,
  },
  {
    course: "c++ course",
    price: 2000,
  },
  {
    course: "python course",
    price: 4000,
  },
  {
    course: "flutter course",
    price: 5000,
  },
];

// Using reduce() to sum up the prices of all courses
// accumulator starts at 0 and adds each course's price
const priceToPay = shoppingCourse.reduce(
  (accumulator, item) => accumulator + item.price,
  0 // Initial accumulator value is 0
);

console.log(priceToPay); // Output: 14000 (3000 + 2000 + 4000 + 5000)
