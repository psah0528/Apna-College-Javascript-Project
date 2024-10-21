let gameSeq =  [];
let userSeq = [];

let btns = ["yellow" , "red" , "purple" , "green"]

let started = false;
let level =0;

let h2 = document.querySelector("h2");

// click n game statred 
document.addEventListener("keypress" , function(){
 if(started == false){
  console.log("game is started");
  started = true;

  levelUp();
 }
});


// button flash when click them 
function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function () {
btn.classList.remove("flash");
}, 1000);
}


function levelUp(){
 level++;
 h2.innerText = 'level ${level}';

 // random btn choose than flash
 let randIdx = Math.floor(Math.random() *3);
 let ranColor = btns[randIdx];
 let randbtn = document.querySelector('.${ranColor}');
 console.log(randIdx);
 console.log(ranColor);
 console.log(randbtn);
 btnflash(randbtn);
}


function btnPress(){
 let btn = this;
 btnFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
 btn.addEventListener("click" ,btnPress );
}



























