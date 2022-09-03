'use strict'

const Person = function(firstName , birthYear){
    // Instance properties
    this.firstName = firstName
    this.birthYear = birthYear

    // Bad practice for make method in constructor function
    /*this.calcAge = function(){
        console.log(2022 - this.birthYear);
    }*/
}

const jam = new Person('Jam' , 2000)
const jonas = new Person('Jonas' , 1991)
const jack = new Person('Jack' , 1975)

console.table(jam);
console.table(jonas);
console.table(jack);
console.log(jam instanceof Person);

