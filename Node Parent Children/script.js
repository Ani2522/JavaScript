console.log("Hello World");
console.log(document.body.childNodes);
console.log(document.body.childNodes[1].childNodes);
let cont = document.body.childNodes[1]

console.log(cont.firstChild);
console.log(cont.lastChild);

console.log("First element chile is : ") ;
console.log(cont.firstElementChild);

console.log(cont.lastElementChild);

cont.lastElementChild.style.color = 'red';
cont.lastElementChild.style.backgroundColor = "yellow";

console.log(cont.lastElementChild.parentElement);


console.log(document.body.firstElementChild.children)

console.log(document.body.firstElementChild.children[3].nextElementSibling);
console.log(document.body.firstElementChild.children[3].previousElementSibling);

let table = document.body.children[1];
console.log(table.rows);