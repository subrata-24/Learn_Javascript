/*
In JavaScript, prototype is a mechanism that allows objects to inherit properties 
and methods from another object. Every JavaScript function has a prototype property 
that is used when creating objects.
*/

// Defining a tax calculation object that contains a method
const TaxCal = {
    calcTax() {
        // Using a template literal to embed an expression inside a string.
        // The `${}` syntax allows us to embed the result of `this.salary * 0.1` directly into the string.
        // `this.salary` refers to the calling object (Subrata or Biswas).
        console.log(`Tax is ${this.salary * 0.1}`); // Tax calculation with template literal
    }
};

// Creating individual person objects with a salary property
const Subrata = {
    salary: "5000" // Salary is stored as a string (better to use a number)
};

const Biswas = {
    salary: "10000" // Salary is stored as a string (better to use a number)
};

/*
Setting the prototype:
- This allows Subrata and Biswas to inherit the calcTax() method from TaxCal.
- Instead of defining calcTax() separately in each object, they share the same function.
- Using `Object.setPrototypeOf()` is the recommended approach for setting prototypes.
*/

// Old way (not recommended):
// Subrata.__proto__ = TaxCal;
// Biswas.__proto__ = TaxCal;

// Best practice: Using Object.setPrototypeOf()
Object.setPrototypeOf(Subrata, TaxCal);
Object.setPrototypeOf(Biswas, TaxCal);

// Calling the inherited method for tax calculation
Subrata.calcTax(); // Output: Tax is 500
Biswas.calcTax();  // Output: Tax is 1000
