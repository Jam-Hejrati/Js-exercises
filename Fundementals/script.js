'use strict'

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],

    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.booking.push({flight: `${this.iataCode}${flightNum}`, name})
    },
}


const eurowing = {
    airline: 'Eurowing',
    iataCode: 'EW',
    booking: [],

}

const book = lufthansa.book;

//wrong and NOT working
// book(23 , 'Sara Williams')

// book.call(eurowing , 23 , 'Sara Williams')
//
// book.call(lufthansa , 239 , 'Merry Cooper')

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    booking: [],
}

// book.call(swiss , 583 , 'Ali Sediqi')
//
// const flightData = [486 , 'Jam Hejrati'];
// book.apply(swiss , flightData)
/* {Call} methods first arg is the object for (this) keywords refer and then get ,
*  the function arguments BUT {Apply} method is exactly like {Call} but instead of functions
*  arguments , it gets an array of args */

/* In modern Js we do not use apply method anymore because we can use spread operator in {Call} method */
// book.call(swiss  , ...flightData)

// {Bind} Method returns a new function that has the (thisArg) in it but does not execute
const bookEW = book.bind(eurowing)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)

bookEW(473, 'Steven Williams')
bookLH(273, "jam Hejrati")

const bookEW23 = book.bind(eurowing, 23)
bookEW23('Sara Ahmadi')
bookEW23('Martha Cooper')

// With Event Listeners
lufthansa.planes = 300
lufthansa.buyPlane = function () {
    console.log(this)

    this.planes++;
    console.log(this.planes)
}

/* document.querySelector('.buy').addEventListener('click' , lufthansa.buyPlane) */ //~~> (this) in buyPLane because of eventListener refers to the button, so we need a method to fix (this) pointer and make it point to (lufthansa) object and should NOT execute in EventListener ~~>
// document
//     .querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

const addTax = (rate , value) => value + value * rate // %
console.log(addTax(0.1 , 200))

const addVAT = addTax.bind(null , 0.23) // thisArg is null because we don't need it
// >==> const addVAT = (value) => value + value * 0.23

console.log(addVAT(150))
console.log(addVAT(100))

// without bind, previous function would be like this...
const addTaxRAte = function(rate){
    return function(value){
        return value+ value * rate
    }
}
const addVAT2 = addTaxRAte(0.23)
console.log(addVAT2(100))