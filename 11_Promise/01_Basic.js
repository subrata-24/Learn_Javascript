const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise One Resolved");
        resolve();
    }, 1000);
})

promiseOne.then(function () {
    console.log("Promise One Resolved");

})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async task 2 resolved");
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "subrata-24",
            email: "subrata17@ac.pstu.ac.bd",
        })
    },1000)
})

promiseThree.then((data) => {
    console.log(data);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({
                username: "Biswas",
                email: "sb823249@gamil.com"
            })
        } else {
            reject("Error: Something went wrong");
        }
    },1000)
})

promiseFour
    .then((data) => {
    console.log(data);
    return data.email;
    })
    .then((email) => {
    console.log(email);
    })
    .catch((error) => {
    console.log(error);
    })
    .finally(() => {
    console.log("The promise may be resolved or rejected but at last it always goes to finally block");
    })

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                username: "Javascript",
                Pass: "12345678"
            })
        } else {
            reject("Error: This JS shows error");
        }
    },1000)
})

async function consumePromiseFive() {
    //what if I do not use try/catch block here?and why?
    try {
        const data = await promiseFive;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function consumePromiseSix(params) {
//    try {
//        const data = await fetch("https://jsonplaceholder.typicode.com/users");
//        const response = await data.json();
//        console.log(response);
//    } catch (error) {
//        console.log("Error: ", error);
//    }
// }

// consumePromiseSix();

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        //Why we do not use await here?
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
})
