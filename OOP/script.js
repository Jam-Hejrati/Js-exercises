"use strict";
const Car = function(make , speed){
    this.make = make
    this.currentSpeed = speed
}
Car.prototype.accelerate = function() {
    console.log(this.currentSpeed += 10);
}

Car.prototype.brake = function() {
    console.log(this.currentSpeed -= 5);
}

const car1 = new Car('BMW' , 120)
const car2 = new Car('Mercedes' , 95)

car1.accelerate() // 130
car1.brake() // 125
car2.accelerate() // 105
car2.brake() // 100