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

const orderSet = new Set([
    "pasta",
    "pizza",
    "pizza",
    "risotto",
    "pasta",
    "pizza",
]);
console.log(...orderSet);
console.log(orderSet.size);
console.log(orderSet.has('pizza')); //true
console.log(orderSet.has('bread')); //false
orderSet.add('bread')
orderSet.add('bread')
console.log(...orderSet);
orderSet.delete('risotto')
console.log(...orderSet);
orderSet.clear()
console.log(orderSet);
console.log(new Set('this is a test'));
console.log(new Set('this is a test').size);
const staff1 = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const staff2 = ["cleaner", "masterChef", "waiter", "manager", "chef", "waiter"];
const staffVary = new Set([...new Set(staff1) , ...new Set(staff2)])
console.log(staff1);
console.log(staff2);
console.log(staffVary);