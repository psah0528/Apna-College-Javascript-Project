// return new array by  filter method that you want to changes 
let nums = [1,2,4,6,7,8];
let ans = nums.filter((el) => {
 return el% 2==0;     //  even no = true return // odd no = false returns
});
// return el< 5;
// if want to oddd no so write return el % 2!=0;