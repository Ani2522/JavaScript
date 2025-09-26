/// IIFE

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// (async function main () {
//     let a = await sleep();
//     console.log(a)
//     let b = await sleep();
//     console.log(b)
// })()

//spread syntax

function sum(x,y,z){
    return x+y+z;
}



//Destructuring

(async function main(){
    // let [x, y, ...rest] = [1,5, 7,8,9,6,4,3,2]
    // console.log(x,y ,rest)


    let obj = {
        a:1,
        b:2,
        c:3,
    }

    let {a,b} = obj;
    console.log(a,b)


    let arr = [1,2,3]
    console.log(sum(...arr)) //spread syntax is used to spread the array elements as individual elements
})()


//Hosting - Read from notes




