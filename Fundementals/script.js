'use strict';

const flight = 'AE234'
const jam = {
    name: 'Jam Hejrati',
    passport: 23436343534,
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999'
    passenger.name = 'Mr. ' + passenger.name

    if (passenger.passport === 23436343534) {
        console.log('checked in')
    } else {
        console.log('Wrong passport!')
    }
}

checkIn(flight, jam);
console.log(flight)
console.table(jam)

const newPassport = function(person){
    return person.passport = Math.trunc(Math.random()*1000000000)
}

console.log(newPassport(jam))
checkIn(flight , jam)



