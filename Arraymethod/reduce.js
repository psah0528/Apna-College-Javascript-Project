// reduce return a single value , work with accumaltor, element
// calculate and return single values

let num = [1,2,3,4,4,5];
let final = num.reduce((res, el) => res+el);
console.log(final);





// find the maximum values 
let nums = [1,2,3,4,5,20];
let max = -1;
for(let i = 0; i<nums.length; i++)
{
 if(max < nums[i]){
  max = nums[i];
 }
}
console.log(nums);



// find max values with the help of reduce methods 
let arr = [1,4,3,5,8,10];
let maxvalue = arr.reduce((maxvalue , el) => {
 if(maxvalue < el){
  return el;

 }else{
  return max;
 }
});
console.log(maxvalue);