a=1;

// for(let i = 0; i<100 ;i++){
//     console.log(a+i);
// }

let obj = {
    name:"Aniket",
    role:"Developer",
    company:"Metron"
}

//forin is used to just print the keys of an object
for (const key in obj) {
   const element = obj[key];
   console.log(key, element);
}

//forof is used to iterate through iterable object like string, array, object etc
for (const c of "aniket"){
    console.log(c)
    
}

let i=5
while(i<10){
    console.log(i);
    i++;
}