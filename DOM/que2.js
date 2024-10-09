// CreateanewinputandbuttonelementonthepageusingJavaScriptonly.Setthetextofbuttonto“Clickme
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "clickme";
document.querySelector("body").append(input);
document.querySelector("body").append(button);


// Qs2.Addfollowingattributestotheelement:-Changeplaceholdervalueofinputto“username”-Changetheidofbuttonto“btn

button.setAttribute("id" , "btn");
input.setAttribute("placeholder" , "username");


// Qs3.AccessthebtnusingthequerySelectorandbuttonid.Changethebuttonbackgroundcolortoblueandtextcolortowhite
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

//  Qs4.Createanh1elementonthepageandsetitstextto“DOMPractice”underlined.Changeitscolortopurple

let h1 =  document.createElement("h1");
h1.innerHTML = "<ul> DOM Practice</ul>";
document.querySelector("body").append(h1);

// que 5 
let p = document.createElement("p");
p.innerHTML = "Apna college Practise";
document.querySelector("body").append(p);










//  Qs5.Createaptagonthepageandsetitstextto“ApnaCollegeDeltaPractice”,whereDeltaisbold









