let button = document.getElementById("btn")

button.addEventListener("dblclick" , ()=>{
    document.querySelector(".box").innerHTML = "<b> Yay you were clicked </b> Enjoy your click";
})
button.addEventListener("contextmenu" , ()=>{
    alert("Dont hack us via right click please");
})
button.addEventListener("keydown" , (e)=>{
   console.log(e)
})


//you can also remove the elevent listener by using removeEventListeer and giving the same variables.