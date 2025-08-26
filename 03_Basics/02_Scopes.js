// Variable declaration using let and var
// var c = 300  // var is commented out because it has function/global scope, which can cause unintended issues

let a = 300; // Declaring 'a' with let, which has block scope

if (true) {
    let a = 10; // Block-scoped 'a', different from the global 'a'
    const b = 20; // Block-scoped 'b', cannot be reassigned
    // console.log("INNER: ", a); // Would print 10 because it refers to block-scoped 'a'
    // var c = 10; // Declaring 'c' with var inside block still makes it accessible globally
}

// console.log(a); // Would print 300 because it's accessing the globally declared 'a'
// console.log(b); // Would result in an error because 'b' is block-scoped and not accessible outside the if block
// console.log(c); // Would print 10 if 'var c = 10;' was uncommented, because 'var' is function-scoped, not block-scoped

/*
    Why is 'var' not used?
    - 'var' is function-scoped, meaning it ignores block scope.
    - If 'var c = 10;' is declared inside the if block, 'c' would still be accessible globally, which can lead to bugs.
    - 'let' and 'const' are block-scoped, preventing accidental modifications of variables outside their intended scope.
*/

// Nested function scope demonstration
function one(){
    const username = "Subrata"; // Declared inside function one(), accessible within this function only

    function two(){
        const website = "youtube"; // Declared inside function two(), accessible only within two()
        console.log(username); // Accessing variable from the outer function (Closure)
    }
    // console.log(website); // Would result in an error because 'website' is block-scoped to function two()

    two(); // Calling function two() inside function one()
}

// one(); // Uncomment to execute function one()

// Block scope demonstration with nested if conditions
if (true) {
    const username = "Subrata"; // Block-scoped variable
    if (username === "Subrata") {
        const website = " youtube"; // Block-scoped variable inside nested if
        // console.log(username + website); // Would print 'Subrata youtube' if uncommented
    }
    // console.log(website); // Would result in an error because 'website' is only accessible within inner if block
}

// console.log(username); // Would result in an error because 'username' is block-scoped


// ++++++++++++++++++ interesting ++++++++++++++++++

// Function hoisting demonstration
console.log(addone(5)); // Works because function declarations are hoisted

function addone(num){
    return num + 1;
}


// Function expression demonstration (hoisting does not work here)
addTwo(5); // This will cause an error because function expressions are not hoisted

const addTwo = function(num){
    return num + 2;
};

/*
    Function Hoisting Explanation:
    - Function declarations (like addone) are hoisted, meaning they can be called before they are defined.
    - Function expressions (like addTwo) are not hoisted, so calling them before declaration results in an error.
*/
