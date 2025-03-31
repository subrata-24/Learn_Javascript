// Creating an empty object using object literal syntax
const tinderUser = {};

// Adding properties to the object
// 'id' - Unique identifier for the user
// 'name' - Name of the user
// 'isLoggedIn' - Boolean to check if the user is logged in or not
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// Creating an object with nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Subrata",
            lastname: "Biswas"
        }
    }
};

// Accessing nested object properties
// console.log(regularUser.fullname.userfullname.firstname);

// Merging multiple objects
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// Merging objects using spread operator
const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);

// Creating an array of user objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "example@gmail.com"
    },
    {
        id: 3,
        email: "test@gmail.com"
    }
];

// Accessing an email from the array of objects
// console.log(users[1].email);

// Object methods to retrieve keys, values, and entries
// console.log(Object.keys(tinderUser)); // Returns an array of keys
// console.log(Object.values(tinderUser)); // Returns an array of values
// console.log(Object.entries(tinderUser)); // Returns an array of key-value pairs

// Checking if a property exists in an object
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Object Destructuring
const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Subrata"
};

// Extracting 'courseInstructor' property using destructuring
const {courseInstructor: instructor} = course;

// console.log(courseInstructor); // Error: 'courseInstructor' is not defined because we renamed it to 'instructor'
console.log(instructor); // Correct way to access the value

// Example JSON format
const jsonExample = {
    "name": "Subrata",
    "coursename": "JS in Hindi",
    "price": "free"
};

// Example of an array of objects
const arrayOfObjects = [
    {},
    {},
    {}
];
