function info(name , age){
console.log('${name} s age is ${age}.');

}
info("pujasha" , 20);


function sum(a , b){
console.log(a+b);
}
sum(1, 27263487);
sum(5, 9);
sum(2, 7);
sum(1, 6);

// find average 
function avg( a , b, c){
 let av = (a+b+c)/3 ;
 console.log(av);
}
avg(3 , 3, 3 );

// prints the multiplications tables 

function printtable(n){
 for(let i = n; i<=n * 10; i+=n){
  console.log(i);
 }
}
printtable(2);



// return 
function sum(a , b ){
 return a+b;
}
let s = sum(2,8);
console.log(s);


// return value 
function isAdult(age){
 if(age >= 18){
  return "adult";
 }
 else{
  return "notadult";
 }
 console.log("byebye ");
}