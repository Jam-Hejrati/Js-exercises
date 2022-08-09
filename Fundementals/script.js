'use strict';

const bookingArr = []

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.table(booking)
    bookingArr.push(booking)
}

createBooking('LH123')
createBooking('LH123', undefined, 456) // undefined in argument ~> will return default value in functions parameter
createBooking('CxR19', 5)