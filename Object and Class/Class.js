// Define a Car class
class Car {

    /*
    Constructor: A special method that is automatically called when a new object 
    of the class is created. It initializes the object properties.
    */
    constructor(brand, mileage, madein) {
        this.brand = brand;   // Assigns the given brand to the object
        this.mileage = mileage; // Assigns the given mileage to the object
        this.madein = madein; // Assigns the given made-in country to the object
    }

    /*
    Static Method: 
    - It belongs to the class itself, not to any specific instance (object).
    - It can be called using the class name directly.
    - It cannot access non-static properties or methods of the class.
    */
    static myType() {
        console.log("I am a Car"); // Displays a message indicating the type of object
    }

    /*
    Instance Methods: These are regular methods that operate on individual instances of the class.
    They can access and modify object properties.
    */

    // Method to start the car
    start() {
        console.log("Start"); // Prints "Start" when the car is started
    }

    // Method to stop the car
    stop() {
        console.log("Stop"); // Prints "Stop" when the car is stopped
    }

    /*
    Setter Method:
    - Used to update the brand of the car.
    - Allows modifying object properties after the object is created.
    */
    // setBrand(brand) {
    //     this.brand = brand; // Updates the car's brand
    // }
}

// Creating an object of the Car class with brand "RR", mileage 100, made in "Japan"
let RR = new Car("RR", 100, "Japan"); 
console.log(RR); // Logs the RR object details

// Creating another object with brand "Ferrari", mileage 50, made in "US"
let ferrari = new Car("Ferrari", 50, "US"); 
console.log(ferrari); // Logs the Ferrari object details

// Calling the static method using the class name
console.log(Car.myType()); // Outputs: "I am a Car"

// Old method for setting properties
// RR.setBrand("RR");
// console.log(RR.brand); // Logs the updated brand
