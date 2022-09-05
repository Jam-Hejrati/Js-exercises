"use strict";

const Person = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
  printName() {
    console.log(`Hey ${this.firstName}`);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const jam = Object.create(Person);
console.log(jam);
jam.name = "Jam";
jam.birthYear = 2000;
console.log(jam);
jam.calcAge();
jam.printName();

console.log(jam.__proto__);
console.log(jam.__proto__ === Person); // True

const sara = Object.create(Person);
sara.init("Sara", 2002);
sara.calcAge();
sara.printName();
