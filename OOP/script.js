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
}

const jam = new PersonCl("Jam Hejrati", 2000);
console.log(jam.age);
console.log(jam);


///////////////////////
/*const account = {
  owner: "Jam",
  movements: [200, 530, 120, 300],

  get latest(){
    return this.movements.slice(-1).pop()
  },

  set latest(mov){
    this.movements.push(mov)
  }
};

console.log(account.latest);
account.latest = 50
console.log(account.movements);*/
