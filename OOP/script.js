"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jam = new Person("Jam", 2000);
console.table(jam);

// Prototypes
// better way to make a method for function constructor
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
jam.calcAge();

Person.prototype.species = "Homo Sapiens";
console.log(jam);
console.log(jam.__proto__);
console.log(jam.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [1, 9, 4, 2, 3, 4, 5, 6, 4, 7, 3, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// Make a new method for arrays (bad practice)
Array.prototype.uniqe = function () {
  return [...new Set(this)];
};
console.log(arr.uniqe());
