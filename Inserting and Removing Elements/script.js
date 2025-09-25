console.log(document.querySelector(".box").innerHTML) //to get html of the box
console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".container").innerText);

console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").tagName);

console.log(document.querySelector(".container").textContent);

// document.querySelector(".container").hidden = true;

document.querySelector(".box").innerHTML = "Hey i am aniket";

console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
document.querySelector(".box").setAttribute("style" , "display : inline");

console.log(document.querySelector(".box").dataset);


//insertion

let div = document.createElement("div");
div.innerHTML = "I have been inserted <b> by aniket </b>";
div.setAttribute("class", "created");
document.querySelector(".container").append(div); //.append, .prepend, .before, .after, .replaceWith()  


let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterend", "I am under the water"); //beforebegin, afterbegin, beforeend, afterend


//Removal

document.querySelector(".box").remove();


//className and classList


console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").className)

document.querySelector(".container").classList.add("aniket")
document.querySelector(".container").classList.remove("red")

console.log(document.querySelector(".container").classList)







