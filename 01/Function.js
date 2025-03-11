//Callback Function->A function that is passed as an argument to another function and is executed later, usually after some operation is completed.

function arithMatic(a, b, callBackFunc) {
    const ans = callBackFunc(a, b);
    return ans;
}

function sum(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

const val = arithMatic(45, 34,minus);
console.log(val);
