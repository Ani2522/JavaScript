function nice(name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " you are excellent!");
    console.log("Hey " + name + " you are amazing!");
    
}

nice("aniket");
nice("shivam");


function sum(a,b,c=2){
    // console.log(a+b);

    return a+b+c;
}

result = sum(3,5);
result1 = sum(3,5,10);
console.log("The sum of a and b and c as default is : " + result);
console.log("The sum of a and b and c as given is : " + result1);



// Arrow function

const func1 = (x)=> {
    console.log("I am an arrow function" , x);
}


func1(32);
func1(66);