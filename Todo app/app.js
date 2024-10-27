let todo = [];
let req = prompt("please enter your  requests");

while(true){
 if(req == "quiet"){
  console.log("quetting app");
  break;
 }

 if(req=="list"){
  console.log("----------------");
  for(let i = 0; i<todo.length; i++ ){
   console.log(i , todo[i]);
  }

  console.log("--------------");
 }
 else if (req == "add"){
  let task = prompt("plz enter the task you want to add");
  todo.push(task);
  console.log("task added");
 }
 else if (req == "delete"){
  let idx = prompt("plz enter the task index");
  todo.splice(idx , 1);
  console.log("task delete");
 }
 else{
  console.log("wrong request");
 }
 req = prompt("plz enter your request");
}
