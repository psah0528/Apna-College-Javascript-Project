var jen = document.querySelector("#cont")
var lov = document.querySelector("i")

jen.addEventListener("dblclick", function(){
lov.style.transform = 'translate(-50%,-50%)  scale(1)'
lov.style.opacity = 0.9;

setTimeout(function(){
 lov.style.opacity = 0;
}, 1000)
setTimeout(function(){
 lov.style.transform = 'translate(-50%,-50%)  scale(0)'
}, 2000)
 })

