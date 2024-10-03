const movie = "avengers";
let guess = prompt("enter fav movies ");
while(guess!= movie){
if(guess == "quiet"){
 console.log(" you are quiet");
 break;
}
 guess = prompt(" wrong guess !! plz try again");
}
if(guess == movie){
 console.log("Congrats");
}