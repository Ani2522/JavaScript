// let obj = {
//     a: 1,
//     b: "Aniket",
// }

// console.log(obj);

// let animal = {
//     eats : true,
// };

// let rabbit = {
//     jumps : true,
// };

// rabbit.__proto__ = animal; //setting prototype of rabbit to animal //proptype is additional property of an object which is used to inherit properties from another object

class Animal {
    constructor(name){
        this.name = name
        console.log("Animal created");
    }

    eats(){
        console.log("Khaa rah hu")
    }

    jumps(){
        console.log("Kood rha hu")
    }
}

class Lion extends Animal {
    constructor(name){
        super(name)
        console.log("Object is been created and its a LION")

    }

    //Method Overridding
    eats(){
        super.eats();
        console.log("Roar")
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);