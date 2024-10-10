// its allows a functions to take an indefinite numbers of arguments and bundle them in an arrays

function sum(...args){
 for(let i =0; i<args.length; i++){
  console.log("you give us : ", args[i]);
 }
}
sum(2);


// examples 

function sum(...argss){
 return argss.reduce((sum ,el) => sum + el);
}
sum(2,3,4,5);











