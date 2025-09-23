let a = [1,2,3,4,5,6]
console.log(a);
console.log(a.length)
console.log(a[0]);

a[0]==566; // array is mutable

console.log(a);

console.log(a.toString());

console.log(a.join(" and "));

console.log(a.pop()); // removes element from last

a.push("aniket") //adds element to last

console.log(a);

a.shift(); //removes element from first

console.log(a);

a.unshift("akanksha"); //adds element to first;

console.log(a);

delete a[4];
console.log(a);
console.log(a.length);

a.sort();
console.log(a);

let numbers = [1,2,3,4,5];
numbers.splice(1,3);
console.log(numbers);

numbers = [1,2,3,4,5];
numbers.splice(1,3,222,555);
console.log(numbers);


let arr = [1,84,73,645];

arr.forEach((value ,index, arr1)=>{
    console.log(value, index, arr1)
})

//forof loop
for (const element of arr) {

    console.log(element);
    
}


