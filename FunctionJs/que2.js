// wap an arrow functions that returns the square of a number n 

const square = (n) => n*n;

console.log(square(4));



// wap a functions that prints hello world 5 times at intervals of 2s each
let id = setInterval(() => {
console.log("hello worlds");
} , 2000);

setTimeout(() => {
 clearInterval(id);
 console.log("clear interval runs");
}, 10000);



