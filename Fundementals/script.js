"use strict";

const restaurant = {
    name: "Classico Italiano",
    location: "Via angelo Tavanti 23, Firenze Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", "Caprese salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 22,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex, mainIndex = 0, time = "20:00", address }) {
        console.log(
            `order received! (${this.starterMenu[starterIndex]}) and (${this.mainMenu[mainIndex]}) will be delivered to (${address}) at (${time})!`
        );
    },

    orderPasta(ing1 = null, ing2 = null, ing3 = null) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
        );
    },
};

const airLine = "TAP Air Portugal";

console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.indexOf('Air'));
console.log(airLine.slice(6));
console.log(airLine.slice(6 , 11)); // not contains the character at index 11
console.log(airLine[11]); // see? didn't contain
console.log(airLine.slice(airLine.indexOf('Air')));

/* slice the FIRST word of string without knowing the length and... */
console.log(airLine.slice(0, airLine.indexOf(" ")));

/* slice the LAST word of string without knowing the length and... */
console.log(airLine.slice(airLine.lastIndexOf(" ") + 1));

console.log(airLine.slice(-3));

const email = '   Hello@Jam.Io \n'
console.log(email);
console.log(email.trim().toLocaleLowerCase()); //normalized email

const ennouncement =
    "All passengers come to boarding door 23, Boarding door 23!";
console.log("replace(): ", ennouncement.replace("door", "gate"));
console.log("replaceAll(): ", ennouncement.replaceAll("door", "gate"));
console.log("replace() with RegEx: ", ennouncement.replace(/door/g, "gate")); //RegEx ~~> Regular Expressions

const plane = 'A320neo'
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('A3'));
console.log(plane.endsWith('eo'));

const [firstName , lastName] = 'Jam Hejrati'.split(' ')
console.log(firstName);
console.log(lastName);
const fullName = ['Mr.' , firstName , lastName].join(' ')
console.log(fullName);

const capitalize = (name) => {
    const nameArr = name.split(" ");
    const fullCapitalizeName = [];
    for (const element of nameArr) {
        // fullCapitalizeName.push(element[0].toUpperCase() + element.slice(1))
        fullCapitalizeName.push(
            element.replace(element[0], element[0].toUpperCase())
        ); //another way
    }
    return fullCapitalizeName.join(" ");
};
console.log(capitalize("jam hejrati"));

const message = 'Go to gate 23!'
console.log(message.padStart(25 , '-'));
console.log(message.padEnd(25 , '-'));

const message2 = 'Bad weather... All Departues Deployed...\n'
console.log(message2.repeat(5));

