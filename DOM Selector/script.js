// let boxes=document.getElementsByClassName("box");
// console.log(boxes);
// boxes[2].style.backgroundColor = "red";

// document.getElementById("red").style.backgroundColor = "yellow";

document.querySelector(".box").style.backgroundColor = "green"; //takes the first element with the matched selector

console.log(document.querySelectorAll(".box")); //retuns an array of all the HTML COLLECTION which has .box as class

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "red";
})

console.log(document.getElementsByTagName("div")); //return all the div i.e node list in the HTML

//Matches closest

let e = document.getElementsByName("div");
console.log(e[4].matches("#red"))

console.log(e[3].closest("red"))
console.log(e[3].closest("container"))

console.log(document.querySelector(".container").contains(e[2]));
console.log(document.querySelector(".container").contains(document.querySelector("body")));
console.log(contains(document.querySelector("body")).document.querySelector(".container"));


