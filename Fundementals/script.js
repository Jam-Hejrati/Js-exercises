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

const setToMap = (map , key , value) => map.set(key , value)
const getFromMap = (map , key) => map.get(key)

const rest = new Map([
    [1 , 'this is the first value'],
    ['yoo ha ha ha' , true],
    [false , 45],
    ['test' , 'ok'] 
])
console.log(getFromMap(rest , 1));
console.log(rest);