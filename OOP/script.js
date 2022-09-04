"use strict";

// Class Expression
// const PersonCl = class {}

// Class Decleration
class PersonCl {
    constructor(firstName , birthYear){
        this.firstName = firstName
        this.birthYear = birthYear
    }

    calcAge(){
        console.log(2022 - this.birthYear);
    }
}

const Jam = new PersonCl('Jam' , 2000)
console.log(Jam);
Jam.calcAge()