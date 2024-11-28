h2 = document.querySelector("h2");

function changeColor(color, delay){
 setTimeout(() => {
  h2.style.color = color;
 } , delay);
}

changeColor("red", 1000);
changeColor("yellow", 2000);
changeColor("green", 3000);





// nesting callback is callback hell 

h1 = document.querySelector("h1");


function changeColor(color, delay, nextColorChange){
 setTimeout(() => {
  h1.style.color = color;
  if(nextColorChange) nextColorChange();
 } , delay);
}

// Nesting 
changeColor("red" , 1000 , () => {
 changeColor("orange" , 1000 , () => {
  changeColor("green" , 1000 , () => {
   changeColor("blue" , 1000 , () => {
    changeColor("grey" , 1000);

   });
  });
 });
});


