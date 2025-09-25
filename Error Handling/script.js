let a = prompt("Enter first no");
let b = prompt("Enter second no");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Invalid number");
}
let sum = parseInt(a) + parseInt(b);

console.log("the sum is " + sum);

// console.log("sum*x" + sum*x); //x is not defined so it will throw an error

try {
    console.log("sum*x" + sum*x)
} catch (error) {
    console.log("Error caught " + error)
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}  
finally {
    console.log("This will execute anyway")
}

//why finally is used why not write the code after try catch block dirctly
//Ans: because if there is a return statement in try or catch block then the code after try catch block will not be executed but finally will be executed anyway