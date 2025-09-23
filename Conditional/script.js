console.log("Hello I am conditional operator")

let age =45;

let grace =2;
if((age+grace)>18){
    console.log("You can drive");
}
else if(age==0){
    console.log("are you kidding");

}
else{
    console.log("You cannot drive");
}

// === checks type and value to be equal


let a =6 ;
let b =8 ;
let c = a>b?(a-b):(b-a);
console.log(c)