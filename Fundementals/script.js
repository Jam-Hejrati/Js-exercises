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

const rest = new Map();
rest.set("name", "classico italiano");
rest.set(1, "Firenze");
rest.set(2, "Lisbon");
rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "we are open")
    .set(false, "we are closed");

console.log(rest.get(true));
console.log(rest.get("name"));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has(2));

rest.delete(2)
console.table(rest);

console.log(rest.size);

rest.clear()
console.log(rest.size);