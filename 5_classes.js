class Animal {

    constructor(name) {
      this.name = name
    }
  
    getName() { 
        return this.name;
    }
}

// let a = new Animal('fred');
// console.log(a.getName());


// class Dog extends Animal {

//     constructor() {
//         super('Doggo')
//         this.speak = 'WOOF!'
//     }
  
//     get talk() { 
//         return `HI: ${this.speak}`;
//     }

//     set setSpeak(speak) { 
//         this.speak = speak;
//     }
// }

// let d = new Dog();
// console.log(d.getName());
// console.log(d.talk);
// d.setSpeak = "BOW WOW"
// console.log(d.talk);