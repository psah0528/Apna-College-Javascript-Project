function multiplegreet(func , count){  // higher order functions 
for(let i = 1; i<= count; i++){
 func();
}
}
let greet = function(){
 console.log("hello puja saha ");

}
multiplegreet(greet , 10);

// example of higher order functions 

function oddeventest(request){
 if(request == "odd"){
  return function(n){
   
  }
 }
}