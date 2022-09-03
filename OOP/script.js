'use strict'

const Person = function(firstName , birthYear){
    // Instance properties
    this.firstName = firstName
    this.birthYear = birthYear
}

const jam = new Person('Jam' , 2000)
console.table(jam);

// Prototypes
// better way to make a method for function constructor
Person.prototype.calcAge = function() {
    console.log(2022 - this.birthYear);
}
jam.calcAge()

Person.prototype.species = 'Homo Sapiens'
console.log(jam);
console.log(jam.hasOwnProperty('firstName'));
console.log(jam.hasOwnProperty('species'));
console.log(Object.hasOwn(jam , 'firstName'));
console.log(Object.hasOwn(jam , 'species'));