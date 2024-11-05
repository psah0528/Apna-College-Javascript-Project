let btn = document.querySelector("button");
let ul =  document.querySelector("ul");
let inp =  document.querySelector("input");


btn.addEventListener("click" , function(){
let item = document.createElement("li");
item.innerText = inp.value;


// create delete btn  
let delbtnn = document.createElement("button");
delbtnn.innerText = "delete";
delbtnn.classList.add("delete");


item.appendChild(delbtnn);
ul.appendChild(item);
 inp.value= "";
});
// event delegations || target pointer and delt items
ul.addEventListener("click" , function(event){
 if(event.target.nodeName == "BUTTON"){
  let ListItem = event.target.parentElement;
 ListItem.remove();
 console.log("delete");
 }
});



