// check if all numbers in our array are multiples of 10 or not.

let nums = [1,2,3,4,50];
let ans = nums.every((el) => el%10 == 0);
console.log(ans);



// create a functions to find the ,minimum numbers in array

let numss= [1,2,3,4,5];
let min = numss.reduce((min , el) => {
 if(min < el){
  return min;
 }
 else{
  return el;
 }
});
console.log(min);







