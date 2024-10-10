// expands an iterable into multiple values 
// spread is return indiviualally value of arrays 
let arr = [1,3,5,6,7,8,9,1,2,3];
console.log(...arr);

console.log(..."pujasaha");

// eg=
let arr1 = [1,3,2,4,5,6];
let newarray = [...arr1];
console.log(newarray);

// multiple values store the single values in arrays 

let odd = [1,3,5,7,9,];
let even = [2,4,6,8,10];
let newnums = [...odd , ...even];

// spreading in object literals 
const data = {
 emails : "ironmain@gmail.com",
 pass : "abcdef",
};
const datacopy = {...data};



