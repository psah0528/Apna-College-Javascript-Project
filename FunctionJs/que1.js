function getsum(n){
 let sum = 0;
 for(let i = 1; i<= n; i++){
 sum += i;
}
return sum;
}

// concatenations of all strings in array
let str = ["hiii" , "helo" , "puja"]
function concat(str){
 let result = "";
for(let i = 0; i<str.length; i++)
result += str[i];
return result;
}