'use strict';

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet('Hey')
greeterHey('Jonas')
greeterHey('Jam')
const greeterWelcome = greet('Welcome')
greeterWelcome('Ali ')
/* Or ~~> */
greet('Welcome')('Ali')

const greetArrow = greeting => name => console.log(`${greeting} ${name}`)
greetArrow('Hello')('Jam')