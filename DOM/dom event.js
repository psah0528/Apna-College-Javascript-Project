 

let btn = document.querySelector("button");
btn.onclick = () => {
 alert("button was clicked");
};
// btn.onclick = sayhello;


let btns = document.querySelectorAll("button");
for(btn of btns){
 btn.onclick = sayhellomoto;
 //  btn.onmouseenter = () => { console.log("you enterd the buttonas") }
}
function sayhellomoto(){
 alert("hello");
}


// addeventlistener  = multiple events occures same times 
btn.addEventListener("click" , () => { 
 console.log("button clicked");
});


// this event listener 
let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");


function changeColor(){
 console.dir(this.innerText);
 this.style.backgroundColor = "blue";
}

btn.addEventListener("click" , changeColor);
p.addEventListener("click" , changeColor);
h1.addEventListener("click" , changeColor);
h3.addEventListener("click" , changeColor);

























