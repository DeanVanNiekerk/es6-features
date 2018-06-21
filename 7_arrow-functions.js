//ES5
function Character() {

    this.name = "Ben";

    this.talk = function() {
        setTimeout(function() {
            console.log(`${this.name} says HI!`)
        })
    }
}

let c = new Character();
c.talk();


//ES6
// function Character2() {

//     this.name = "Ben";

//     this.talk = function() {
//         setTimeout(function() {
//             console.log(`${this.name} says HI!`)
//         })
//     }
// }

// let c2 = new Character2();
// c2.talk();