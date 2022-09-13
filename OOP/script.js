"use strict";

// Public fields
// Private fields
// Public methods
// Private methods

class Account {
  // Public fields (instances)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this
  }

  withdraw(val) {
    this.deposit(-val);
    return this
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this
    }
  }
  
  // Private methods
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jam", "IR", 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

// acc1.#approveLoan(1000); Err) Private field
// console.log(acc1.#pin);  Err) Private field
// console.log(acc1.#movements);  Err) Private field

// Chaning
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acc1.getMovements());