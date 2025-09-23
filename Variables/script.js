console.log("Hey i am aniket");
// Var are globally scoped and let and const are block scoped ; Mostly we use let
let a = 5;
a=a+1; //allowed
let b = 6;
let c = "Aniket";
console.log(a+b);
console.log(typeof a, typeof b, typeof c);

{
    let a = 10;
    console.log("inside block a : " + a);
}

console.log("outside block a : " + a);

// const a1=5;
// a1=a1+a;// not allowed because a1 is constant


// primitive data type

let x = "Aniket";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r);
console.log(typeof x , typeof y , typeof z, typeof p , typeof q , typeof r);


//object - key value pair combination

let o = {
    name : "Aniket",
    "job role" : "Developer",
    "job code" : "8398"
}

console.log(o);

o.salary = "100 crores";

console.log(o);
