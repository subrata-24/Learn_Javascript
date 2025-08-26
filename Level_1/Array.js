
const initArray = [1, 2, 3, 4, 5, 6, 7];
//For print array
// console.log(initArray);
// for (let i = 0; i < initArray.length; i++)
//     console.log(initArray[i]);

// function print(str)
// {
//     console.log(str);
// }
// initArray.forEach(print);

//push,pop,shift,unshift

//push and pop from end
initArray.push(5);
console.log(initArray);
initArray.pop();
console.log(initArray);

//push and pop in front
initArray.unshift(6);
console.log(initArray);
initArray.shift();
console.log(initArray);

//concatation of two array
const xx = [8, 9, 0];
console.log(initArray.concat(xx));




