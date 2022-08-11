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

book.call(eurowing , 23 , 'Sara Williams')

book.call(lufthansa , 239 , 'Merry Cooper')

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    booking:[],
}

book.call(swiss , 583 , 'Ali Sediqi')

const flightData = [486 , 'Jam Hejrati'];
book.apply(swiss , flightData)
/* {Call} methods first arg is the object for (this) keywords refer and then get ,
*  the function arguments BUT {Apply} method is exactly like {Call} but instead of functions
*  arguments , it gets an array of args */

/* In modern Js we do not use apply method anymore because we can use spread operator in {Call} method */
book.call(swiss  , ...flightData)