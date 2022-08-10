'use strict';

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ')
}

//Higher-Order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`)
}

transformer('JavaScript is the best!', upperFirstWord /*this is Call-Back function here*/);
console.log('-----------------------')
transformer('JavaScript is the best!', oneWord);