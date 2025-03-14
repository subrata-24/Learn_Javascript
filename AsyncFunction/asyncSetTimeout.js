function findAns(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) ans++;
    console.log(ans);
}

function findSum() {
    findAns(1000);
}

// Asynchronous function: `setTimeout` schedules `findSum` to run after 1000ms (1 second).
// It does NOT block the execution of the next lines of code.
setTimeout(findSum, 1000);

// This line executes immediately because `setTimeout` is non-blocking.
console.log("Hello World");
