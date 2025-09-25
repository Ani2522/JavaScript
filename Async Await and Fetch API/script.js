//making funcction async means it will run in the background and will not block the main thread

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = false;
//             if (!error) {
//                 console.log("data received")
//                 resolve();
//             }
//             else {
//                 reject("Error: Something went wrong")
//             }
//         }, 3000);
//     })
// }


//settle means resolve or reject
// resolve means promise is settelled/completed successfully
// reject means promise is settelled/completed with some error

// async function getData() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') //fetch api
//     let data = await x.json();
//     return data
// }

async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}


async function main() {
    console.log("Loading modues...")

    console.log("Do something else ")

    console.log("Load data")

    let data = await getData(); // now using await this will wait for the promise to be resolved or rejected i.e it will wait for 3 second here then execute the next line of code
    console.log(data) //it will show promise pending as it is not resolved yet

    console.log("process data")

    console.log("task 2")
}

main()


//method 1 // this will wait for the promise to be resolved or rejected and after that only it will execute the next line of code
// data.then((v)=>{
//     console.log(data)
//     console.log("process data")
//     console.log("task 2")
// })

