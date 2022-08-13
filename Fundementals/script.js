'use strict'

const secureBooking = function(){
    let passengerCount = 0

    return function() {
        passengerCount++
        console.log(`${passengerCount} passengers`)
    }
}

const booker = secureBooking();
booker() // passengerCount = 1
booker() // passengerCount = 2
booker() // passengerCount = 3