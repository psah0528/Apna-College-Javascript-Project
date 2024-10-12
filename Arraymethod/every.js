// returns true if every elements of array gives true for some functions . else returns false 
[2,4,8,10].every((el) => el%2 ==0); // return even
[2,4,8,10 , 1].every((el) => el%2 ==0); // return odd


// some method always returns true or false 
[1,2,3,4].some((el) => (el%2==0));

// reduce method = return a only a single values that depends on conditions 

let nums = [1,2,3,4,5];
let final = nums.reduce((res , el) => (res+el));
return res+el;
console.log(final);

// o/p is 15

// check if all numbers in our array are multiples of 10 or not
let numss = [10,20,30,50];
let ans = numss.every((el) => el%10 == 0);
console.log(ans);


// create a functions to finds the min numbers in an array
let minnum = [1,2,4,6,0];
let  minimum = minnum.reduce((min , el) => {
 if(min<el){
  return min;
 }else{
  return el;
 }
});
console.log(min);