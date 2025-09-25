let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random no is supporting you")
    }
    else {
        setTimeout(() => {
            console.log("yes i am done")
            resolve("aniket") //this stataement complete the promise
        }, 3000)

    }
})

//the above pormise will be done when the promise is resolved, like in this case it says resolve the promise with aniket value

// prom1.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
// })


let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random no is supporting you")
    }
    else {
        setTimeout(() => {
            console.log("yes i am done")
            resolve("aniket 2") //this stataement complete the promise
        }, 3000)

    }
})


let p3 = Promise.all([prom1, prom2]) //promise.allSettle will give full result not considered resolved of fail just return the result

p3.then((a)=>{
console.log(a)
}).catch((e)=>{
    console.log(e)
})
