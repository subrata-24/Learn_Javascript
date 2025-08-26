//It may be String,Number,Boolean

let FirstName = "Subrata Biswas";//String
let age = 18;//Number
let isMarried = true;//Boolean

console.log("My name is " + FirstName + " and my age is " + age);

if (isMarried)
{
    console.log(FirstName + " is married");
}
else
{
    console.log(FirstName + " is not married");
}


//for loop
let answer = 0;
for (let i = 0; i <= 100; i++)
{
    answer += i;
}
console.log(answer);

//array

const num = [2, 3, 4, 7, 8, 45, 24, 78, 45];
for (let i = 0; i < num.length; i++)
{
    console.log(num[i]);
}
