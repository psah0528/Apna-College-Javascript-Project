// map is return double values of any elements like % cgpa gpa  
// take single argument, that return the value from callback that store a new array 

let num = [1,2,3,4,5 ,6];
let double = num.map((el) => {
 return el * 2;

});

// gpa  find of all students 

let students = [
 {
  name: "puja",
  marks : 98.8
 },
 {
  name: "monika",
  marks : 76.9
 },
];
let gpa = students.map((el) => {
 return el.marks/10;
});