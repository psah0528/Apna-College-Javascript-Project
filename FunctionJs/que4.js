// Qs1.Square and sum the array element using the arrow function and then find the average of the array
let nums = [1,2,3,4,4];

const square = nums.map((num) => num*num);
console.log(square);

let sum = square.reduce((acc , cur) => acc+cur,0);

let avg = sum/nums.length;
console.log(avg);

//  Create a new array using the map function whose each element is equal to the original element plus 5 
let numbers = [1,2,3,4,5,6,6];
console.log(numbers.map((number) => number+5));

//  Create a new array whose element are in uppercase of words present in the original array
let str = ["adam" , "bob", "cattli"];
console.log(str.map((string) => string.toUpperCase()));

//  WriteafunctioncalleddoubleAndReturnArgswhichacceptsanarrayandavariablenumberofarguments.Thefunctionshouldreturnanewarraywiththeoriginalarrayvaluesandalloftheadditionalargumentsdoubled
const doubleandreturnargs = (arr, ...args) => [...arr , ...args.map((v) => v*2),];
doubleandreturnargs([1,2,3] ,4 ,5); // 1 2 3 9, 9

//  WriteafunctioncalledmergeObjectsthatacceptstwoobjectsandreturnsanewobjectwhichcontainsallthekeysandvaluesofthefirstobjectandsecondobject
const mergeobject = (obj1, obj2) => ({...obj1 , ...obj2});
mergeobject({a : 1, b: 2} , {c: 3 , d: 4});   // {a :1, b:2, c:3 , d:4}





