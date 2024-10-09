//  a <p> with red text that says hey i am red
let p = document.createElement("p");
p.innerHTML = "hey i am red";
document.querySelector('body').append(p);
p.classList.add("red");     // create class red name 





//  a <h3> with blue text that says hey i am blues
let h3 = document.createElement("h3");
h3.innerHTML = "hey i am blue";
document.querySelector('body').append(h3);
h3.classList.add("blue"); // create class blue names 


// a div with a black border and pink background color with elements inside is 1 h1 that says i am div 2. p that says mee tooo 

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p2 = document.createElement("p2");
h1.innerText = "I am in a div";
p2.innerText = "me too";
div.append(h1);
div.append(p2);
div.classList.add("box");
document.querySelector("body").append(div);


















