let btn = document.querySelector("button");

btn.addEventListener("click" , function() {
 let h3 = document.querySelector("h3");
 let randomColor = GetRandomColor();
 h3.innerText = randomColor;
 console.log("color updates");

})


// access div and change color 

let div = document.querySelector("div");
div.style.backgroundColor = randomColor;




function GetRandomColor(){
 let red = Math.floor(Math.random() * 255);
 let green = Math.floor(Math.random() * 255);
 let blue = Math.floor(Math.random() * 255);



 let color = '(${red} , ${green} , ${blue})';
return color; 

}


