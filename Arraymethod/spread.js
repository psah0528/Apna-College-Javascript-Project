let arr = [1,2,3,4,5];
let newArr = [...arr];
console.log(arr);


let chars = [..." hello"];
console.log(chars);



let odd = [1,2,3,4,5];
let even = [2,4,6,8,10];
let num = [...odd, ...even];
console.log(num);


function sum(...args){
 for(let i=0; i<args.length; i++)
 {
  console.log("you gave us " , args[i]);
  // sum(1);
 }
}


// rest 

function sum(...argss){
 return argss.reduce((sum, el) => sum+el);
// sum(1,2,3,4);
}

























