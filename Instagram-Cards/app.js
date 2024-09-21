var istatus = document.querySelector("h5");
var addfriend = document.querySelector("#follow")
var removefriend = document.querySelector("#remove")

addfriend.addEventListener("click" , function(){
 istatus.innerHTML = "Following"
 istatus.style.color = "green"
})

removefriend.addEventListener("click", function(){
 istatus.innerHTML = "Unfollow"
 istatus.style.color = "red"
})









