const max = prompt("enter the max numbers");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the numbers");
while(true){
 if(guess == "quiet"){
  console.log("users are quiet");
  break;
 }

 if(guess == random){
  console.log("are you right random num was ", random);
  break;
 }
 else if(guess < random){
  guess = prompt(" hint!!!   num is too small. plz try again");
 }else {
  guess = prompt(" hint!!!   number is too large .. plz try again");
 }
}