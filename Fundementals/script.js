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
console.log(restaurant.openingHours?.mon?.open); //if restaurant.openingHours exists the go next , if mon exists then go next ~~> it doesn't exist so returned undefined
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'closed'
    console.log(`On ${day}, we open at ${open}`);
}
console.log(restaurant.order?.(0,2) ?? 'Method doesn\'t exist');
console.log(restaurant.orderRisotto?.(0,2) ?? 'Method doesn\'t exist');
const users = [{ name: "Jam", email: "Jam@gmail.com" }];
console.log(users[0]?.name ?? 'user array empty');