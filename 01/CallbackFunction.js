/*
function cube(n)
{
    return n * n * n;
}
function square(n)
{
    return n * n;
}

function sumOfCube(a, b) {
    let ans1 = cube(a);
    let ans2 = cube(b);
    return ans1 + ans2;
}

function sumOfsquare(a, b) {
    let ans1 = square(a);
    let ans2 = square(b);
    return ans1 + ans2;
}

const ans = sumOfCube(2, 3);
console.log(ans);
*/

//Here sumOfCube and sumOfsquare almost similar.So that this can be accumulate by
//Callback function

function cube(n)
{
    return n * n * n;
}
function square(n)
{
    return n * n;
}

function sumOfSomething(a, b,callback) {
    let ans1 = callback(a);
    let ans2 = callback(b);
    return ans1 + ans2;
}

const ans = sumOfSomething(2, 3,cube);
console.log(ans);
