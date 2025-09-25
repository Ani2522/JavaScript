console.log("Hello World"); // Prints "Hello World" in the console

console.log(document.body.childNodes); // Logs all child nodes of the <body> (including text nodes, comments, etc.)
console.log(document.body.childNodes[1].childNodes); // Logs child nodes of the 2nd child of <body>

let cont = document.body.childNodes[1]; // Stores the 2nd child of <body> into 'cont'

console.log(cont.firstChild); // Logs the first child (could be a text node or element)
console.log(cont.lastChild); // Logs the last child (could be a text node or element)

console.log("First element child is : "); 
console.log(cont.firstElementChild); // Logs the first **element** child (ignores text nodes)

console.log(cont.lastElementChild); // Logs the last **element** child (ignores text nodes)

// Change the style of the last element child
cont.lastElementChild.style.color = 'red'; // Sets text color to red
cont.lastElementChild.style.backgroundColor = "yellow"; // Sets background to yellow

console.log(cont.lastElementChild.parentElement); // Logs the parent element of the last element child

console.log(document.body.firstElementChild.children); 
// Logs all children (HTMLCollection) of the first element inside <body>

console.log(document.body.firstElementChild.children[3].nextElementSibling); 
// Logs the element right after the 4th child (index 3) of body’s first element

console.log(document.body.firstElementChild.children[3].previousElementSibling); 
// Logs the element right before the 4th child (index 3) of body’s first element

let table = document.body.children[1]; // Stores the 2nd child of <body> into 'table' (likely a <table>)
console.log(table.rows); // Logs all rows (HTMLCollection of <tr>) inside the table
