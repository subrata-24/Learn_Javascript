// ---------------------------------
// forEach with simple array
// ---------------------------------

const myArray = ["js", "cpp", "py", "rb", "swift"];

// Using anonymous function
myArray.forEach(function (item) {
    console.log(item);
});

// Using arrow function
myArray.forEach((item) => {
    console.log(item);
});

// Using a named function
function printme(item) {
    console.log(item);
}

myArray.forEach(printme); // Same result as above

// ✅ IMPORTANT:
// forEach is a higher-order function that executes the provided function once for each array element.

const arr = ["apple", "banana", "cherry", "date"];
arr.forEach((value, index, array) => {
    console.log(`Index: ${index}, Value: ${value}, array: ${array}`);
});

// ---------------------------------
// forEach with array of objects
// ---------------------------------

const myObject = [
    {
        LanguageName: "Javascript",
        CompilerName: "V8"
    },
    {
        LanguageName: "C++",
        CompilerName: "G++"
    },
    {
        LanguageName: "Python",
        CompilerName: "CPython"
    },
    {
        LanguageName: "C",
        CompilerName: "GCC"
    },
    {
        LanguageName: "Ruby",
        CompilerName: "MRI"
    }
];

// Using forEach to loop through an array of objects
myObject.forEach((item) => {
    console.log(`Compiler name of ${item.LanguageName} is ${item.CompilerName}`);
});

// ✅ IMPORTANT:
// In the callback for forEach, make sure to include the parameter (e.g., `item`) to 
// access each element.This is especially useful when dealing with arrays of objects.
