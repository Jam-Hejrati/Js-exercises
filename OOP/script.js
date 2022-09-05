"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jam = new Person("Jam", 2000);

Person.hey = function () {
  console.log("Hey there...");
  console.log(this);
};

Person.hey(); // Hey there...
// jam.hey() // Error

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  // Static Method
  static hey() {
    console.log("Hey there...");
    console.log(this);
  }
}
const jam2 = new PersonCl('Jam' , 2000)

PersonCl.hey() // Hey there...
// jam2.hey() // Error
