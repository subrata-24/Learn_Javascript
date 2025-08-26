//A function which have no name.It can be used in the argument
function cube(n)
{
    return n * n * n;
}

function sumOfSomething(a, b,callback) {
    let ans1 = callback(a);
    let ans2 = callback(b);
    return ans1 + ans2;
}

const ans = sumOfSomething(2, 3,function (n){//here the function have no name but it works
    return n * n;
});
console.log(ans);
