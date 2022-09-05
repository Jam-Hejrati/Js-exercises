"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // Inheritance
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2000, "Computer Science");
console.log(mike);
mike.introduce();
mike.calcAge() // Because of prototypes Linking

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);