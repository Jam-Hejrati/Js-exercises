"use strict";

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    console.log((this.speed += 10));
  }

  brake() {
    console.log((this.speed -= 5));
  }
}

const Car1 = new Car("Ford", 120);
console.log(Car1.speedUS);
Car1.accelerate()
Car1.accelerate()
Car1.brake()
console.log(Car1.speedUS);
Car1.speed = 50
console.log(Car1);