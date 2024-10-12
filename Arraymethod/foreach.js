// to access the indivisual property than used to foreach methods 

let arr = [1 , 2, 3, 4, 5, 6];
let print = function(el){
 console.log(el);
};
arr.forEach(print);
// same as foreach arrays 

let ar = [1,9,7,5,4];
ar.forEach((el) => {
 console.log(el);
});

// create array within object foeach methods 
let arrr = [
 {
  name : "pujasah",
  age : 20
 },
 {
  name: "monika",
  age : 31
 },
];
arrr.forEach ((student) => {
 console.log(student.age);
});