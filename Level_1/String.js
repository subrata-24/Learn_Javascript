//Finding the length of string
const str = "Subrata Biswas";
console.log(str.length);

function len(str)
{
    return str.length;
}
console.log(len(str));

//Index of string
function FindIndex(st, target)
{
    //If the target is not present then it print -1
    //By default it shows the first index
    console.log("Index of " + target + " is", st.indexOf(target));

    //For last index
    console.log("Last Index of " + target + " is", st.lastIndexOf(target));
}
const st = "Subrata Biswas Biswas";
FindIndex(st, "Bisw");

//Slice and substring

let ans = st.slice(3, 9);//it give the substring from 3 to 8 index
let ans2 = st.substr(3, 9);//it give the substring starting with 3 and length is 9

console.log(ans);
console.log(ans2);


function find(st, start, end)
{
    return st.slice(start, end);
   // return st.substr(start, end);
}
let ok = find(st, 3, 9);
console.log(ok);

//Replace a string
console.log(str.replace("a", "Biswas"));//it replace only in the first occurance of string

//Split the string.means based on given delimeter the string is split in a array
//where it finds the delimeter and delete that delimter
const splt = "Hi,my name is subrata";
console.log(splt.split(" "));//split where it find space.Delimeter is space.
console.log(splt.split("m"));//split where it find m.Delimeter is m.

//Trim string-->delete all extra space from begining and ending ans if there is more
//space than one in then it delete all space except one
const nam = "     Subrata       Biswas    ";
console.log(nam.trim());

//To upper and to lower
console.log(nam.toLowerCase());
console.log(nam.toUpperCase());
