"use strict";

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name!`);
    }
  }

  get fullName(){
    return this._fullName
  }

  static hey(){
    console.log('Hey there');
  }
}
class StudentCl extends PersonCl {
  constructor(fullName , birthYear , course){
    //Always need to happen first!
    super(fullName , birthYear)
    this.course = course
  }

  introduce(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge(){
    console.log(`I'm ${this.age} years old`);
  }
}

const sara = new StudentCl('Sara Jones' , 2008 , 'Computer Engineering')
sara.introduce()
sara.calcAge()
