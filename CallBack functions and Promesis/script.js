console.log("aniket")
console.log("akanksha")

setTimeout(()=>{
    console.log("I am inside set timeout");
},2000);

console.log("The end");

/// this script will be executed asynchronously as javascript has asynchronous behaviour which means aniket akanksha and The end will print first and after 2 second set timeout will run as it is a asynchronous function.


const callback = (arg) => {
    console.log(arg);
}

const loadScript = (src , callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Harry") //onload is an event type

    document.head.append(sc)
    
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , callback)


// this can be very irritating like function inside function inside function ...and so on it is called piramid of doom
// To overcome this Promesis are used

