"use strict";

// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges!`;
//     return juice;
// }
//
// const appleJuice = fruitProcessor(12, 0)
// console.log(appleJuice)
// const appleOrangeJuice = fruitProcessor(2,4)
// console.log(appleOrangeJuice)

// const calcAge = birthyear => 2037 - birthyear;
// const age = calcAge(1991)
// console.log(age)

// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear
//     const retirement = 65 - age
//     return retirement
// }
//
// console.log(yearsUntilRetirement(1991))

// const fruitPieces = fruit => fruit * 4
//
// const fruitProcessor = (apples, oranges) => {
//     const applePieces = fruitPieces(apples)
//     const orangePieces = fruitPieces(oranges)
//
//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`
//     return juice
// }
//
// console.log(fruitProcessor(2, 3))

// const testFunc = function (number) {
//     if (number % 3 === 0) {
//         console.log("hello first condition")
//     } else if (number % 2 === 0) {
//         console.log("hello second condition")
//     }
// }
//
// testFunc(6)

// function func1(){
//     var test ='func1 is running and test declared'
// }
// function func2(){
//     test = 'func2 is running and test value changed'
// }
// func1()
// console.log(test)
// func2()
// console.log(test)

// const calcAge = (birthYear) => 2037 - birthYear;
//
// const years = [1990, 2037, 1892, 2012, 1981];
//
// const ages = [
//     calcAge(years[0]),
//     calcAge(years[1]),
//     calcAge(years[years.length - 1]),
// ];
//
// console.table(ages);

// const names = ["jam", "soheil", "mohammad", " zahra"]
//
// const newLength = names.push("hossein")
// console.log(names)
// console.log(newLength)
//
// const newLength2 = names.unshift("ali")
// console.log(names)
// console.log(newLength2)
//
// const remove = names.pop()
// console.log(names)
// console.log(remove)
//
// const remove2 = names.shift()
// console.log(names)
// console.log(remove2)
//
// console.log(names.indexOf('jaam'))
// console.log(names.indexOf('jam'))
//
// console.log(names.includes('jam'))
// console.log(names.includes('jaam'))

// const jam = {
//     firstName: 'Jam',
//     lastName: 'Hejrati',
//     age: 1401 - 1379,
//     job: 'programmer',
//     friends: ['soheil', 'sogand', 'pouya', 'amirreza']
// };
//
// console.log(jam)
// console.log(jam.age)
// console.log(jam.lastName)
// console.log(jam['firstName'])
//
// const nameKEy = 'Name'
//
// console.log(jam['first' + nameKEy])
// console.log(jam['last' + nameKEy])
//
//
// jam.location = 'Iran'
// jam['instagram'] = '@Jam.dev'
//
// let interestedIn = prompt("what do you want to know about jam ? choose between firstName , lastName , age , job , friends")
//
// if (jam[interestedIn]) {
//     console.log(jam[interestedIn])
// } else {
//     console.log(`Jam's ${interestedIn} still doesn't exist , choose between firstName , lastName , age , job , friends`)
// }
//
// console.log(`${jam["firstName"]} has ${jam.friends.length} friends and his best friend is ${jam.friends[0]}`)

// const jam = {
//     firstName: 'Jam',
//     lastName: 'Hejrati',
//     birthYear: 1379,
//     job: 'programmer',
//     friends: ['soheil', 'sogand', 'pouya', 'amirreza'],
//     hasDriversLicense: true,
//     calcAge1: function (birthYear) {
//         return 1401 - birthYear
//     },
//     calcAge2: function () {
//         return 1401 - this.birthYear
//     },
//     calcAge3: function () {
//         this.age = 1401 - this.birthYear
//         return this.age
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge3()}-year old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//     }
// };
// jam.friends.push()
// console.log(jam.calcAge1(1379))
// console.log(jam['calcAge1'](1379))
// console.log(jam.calcAge2())
// console.log(jam.calcAge3())
// console.log(jam.getSummary())

// for (let i = 1; i <= 10; i++) console.log(`Jam hejrati ${i}`)

// const jamArray = [
//     'Jam',
//     'Hejrati',
//     'Programmer',
//     1401 - 1379,
//     ['soheil', 'sogand', 'pouya']
// ]
//
// const types = []
//
// jamArray.forEach(item => {
//     Array.isArray(item)
//         ? item.forEach(property => {
//             console.log(property);
//             types.push(typeof property)
//         })
//         : console.log((item))
//     types.push(typeof item)
// })
//
// console.log(types)

// const jamArray = [
//     'Jam',
//     'Hejrati',
//     'Programmer',
//     1401 - 1379,
//     ['soheil', 'sogand', 'pouya'],
//     true
// ]
//
// for (let i = jamArray.length - 1; i >= 0; i--) {
//     console.log(i, jamArray[i])
// }

// const jamArray = [
//     'Jam',
//     'Hejrati',
//     'Programmer',
//     1401 - 1379,
//     ['soheil', 'sogand', 'pouya'],
//     true
// ]
//
// while (jamArray.length) {
//     console.log(jamArray[jamArray.length - 1])
//     jamArray.length -= 1
// }
// console.log(jamArray)

// let dice = Math.floor(Math.random() * 6) + 1
// while (dice !== 6) {
//     console.log(dice)
//     dice = Math.floor(Math.random() * 6) + 1
// }

// const restaurant = {
//     name: "Classico Italiano",
//     location: "Via angelo Tavanti 23, Firenze Italy",
//     categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//     starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", "Caprese salad"],
//     mainMenu: ["Pizza", "Pasta", "Risotto"],
//
//     order: function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },
// };
//
// const arr = [2,3,4]
// const [a,b,c] = arr
// console.log(b);
//
// let [first, , second] = restaurant.mainMenu;
// console.log(first, second);
// [first, second] = [second, first];
// console.log(first, second);
//
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter);
// console.log(main);
//
// const nested = [2 ,4 , [5 , 6]]
// const [first , , [second , third]] = nested
// console.log(first , second , third);
//
// const [p = 0, q = 0, r = 0] = [8];
// console.log(p, q, r);

// const restaurant = {
//     name: "Classico Italiano",
//     location: "Via angelo Tavanti 23, Firenze Italy",
//     categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//     starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", "Caprese salad"],
//     mainMenu: ["Pizza", "Pasta", "Risotto"],
//
//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 22,
//         },
//         sat: {
//             open: 0,
//             close: 24,
//         },
//     },
//
//     order: function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },
//
//     orderDelivery: function ({
//         starterIndex = 1,
//         mainIndex = 0,
//         time = "20:00",
//         address,
//     }) {
//         console.log(
//             `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//         );
//     },
// };
//
// const {name , openinghours , categories} = restaurant
// console.log(name , openinghours , categories);
//
// const {name: restaurantsName , openinghours: hours , categories: tags} = restaurant
// console.log(restaurantsName , hours , tags);
//
// const {menu = [] , starterMenu: starters = [] } = restaurant
// console.log(menu , starters);
//
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
//
// console.log(a, b);
//
// const {fri: {open , close}} = openinghours
// console.log(open , close);
//
// const {
//     openingHours: {
//         fri: { open : oh, close: ch },
//     },
// } = restaurant;
// console.log(openingHours); ~~> not declaring a variable , just addresing
// console.log(fri);          ~~> not declaring a variable , just addresing
// console.log(oh);
// console.log(ch);
//
// restaurant.orderDelivery({
//     time: "22:30",
//     address: "tehran",
//     mainIndex: 2,
//     starterIndex: 2,
// });
// restaurant.orderDelivery({
//     address: "tehran",
//     starterIndex: 2,
// });

// const arr = [3, 4, 5];
// const arrNew = [1,2,...arr]
// console.log(arrNew);
// console.log(...arrNew);
// console.log(...'test');
// const restaurant = {
//     name: "Classico Italiano",
//     location: "Via angelo Tavanti 23, Firenze Italy",
//     categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//     starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", "Caprese salad"],
//     mainMenu: ["Pizza", "Pasta", "Risotto"],
//
//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 22,
//         },
//         sat: {
//             open: 0,
//             close: 24,
//         },
//     },
//
//     order: function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },
//
//     orderDelivery: function ({
//         starterIndex = 1,
//         mainIndex = 0,
//         time = "20:00",
//         address,
//     }) {
//         console.log(
//             `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//         );
//     },
//
//     orderPasta: function (ing1 = null, ing2 = null, ing3 = null) {
//         console.log(
//             `Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}!`
//         );
//     },
// };
// const newMenu = [...restaurant.mainMenu , 'Gnocci']
// console.log(newMenu);
//****** Merge two array together ******//
// const menu = [...restaurant.mainMenu , ...restaurant.starterMenu];
// console.log(menu);
// const firstStr = 'Hello'
// const secondStr = 'World'
// const wholeStr = [...firstStr,' ',...secondStr]
// console.log(... wholeStr);
//
// const ingredients = ["a", "b", "c"];
// restaurant.orderPasta(...ingredients);
// console.log(ingredients);
// console.log(restaurant);
// const newRestaurant = { ...restaurant, founder: "Guiseppe" };
// newRestaurant.orderPasta(...ingredients);
// console.log(newRestaurant.founder);
// console.log(newRestaurant);

// const arr = [1, 2, ...[3, 4]];
// console.log(arr);
//
// const [a,b,...others] = [1,2,3,4,5,6]
// console.log(others);
/* CHECK FOR REST SHALLOW COPY */
// let arr1 = [1,2,[3,4]]
// const [a,...others] = arr1
// console.log('arr1: ' , arr1);
// console.log('others: ' , others);
// arr1[1] = 99
// arr1[2][0] = 1111
// console.log('arr1: ' , arr1);
// console.log('others: ' , others);
// const restaurant = {
//     name: "Classico Italiano",
//     location: "Via angelo Tavanti 23, Firenze Italy",
//     categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//     starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", "Caprese salad"],
//     mainMenu: ["Pizza", "Pasta", "Risotto"],

//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 22,
//         },
//         sat: {
//             open: 0,
//             close: 24,
//         },
//     },

//     order: function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery: function ({
//         starterIndex = 1,
//         mainIndex = 0,
//         time = "20:00",
//         address,
//     }) {
//         console.log(
//             `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//         );
//     },

//     orderPasta: function (ing1 = null, ing2 = null, ing3 = null) {
//         console.log(
//             `Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}!`
//         );
//     },
// };
// const [pizza , pasta , ...others] = [...restaurant.mainMenu , ...restaurant.starterMenu]
// console.log(pizza);
// console.log(pasta);
// console.log(...others);
// const {sat , ...others} = restaurant.openingHours
// console.table(sat);
// console.table(others);
// const sum = (...numbers) => {
//     let sumNum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sumNum += numbers[i];
//     }
//     return sumNum;
// };
// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2));
// console.log(sum(1, 2,3245,1,235,3));
// const x = [3,5,5,3,6,5,3]
// console.log(sum(...x));

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

    orderDelivery({
        starterIndex = 1,
        mainIndex = 0,
        time = "20:00",
        address,
    }) {
        console.log(
            `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1 = null, ing2 = null, ing3 = null) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
        );
    },
};
// restaurant.orderPasta &&
//     restaurant.orderPasta(...["mushroom", "cream", "salt"]);
// restaurant.numGuests = 0
// const guests = restaurant.numGuests ?? 10
// // const guests = restaurant.numGuests || 10
// console.log(guests);
// const rest1 = {
//     name: "Capri",
//     // numGuests: 20,
//     numGuests: 0,
// };
// const rest2 = {
//     name: "La piazza",
//     owner: "Giovanni Rossi",
// };
// rest1.numGuests = rest1.numGuests || 10; // ~~> rest1.numGuests ||= 10
// rest2.numGuests = rest2.numGuests || 10; // ~~> rest2.numGuests ||= 10
// console.log(rest2.numGuests , rest1.numGuests);
// rest1.numGuests ||= 10 ~~> wrong answer if the number is 0
// rest2.numGuests ||= 10 ~~> wrong answer if the number is 0
// rest1.numGuests ??= 10
// rest2.numGuests ??= 10
// console.table(rest1);
// console.table(rest2);
// rest2.owner = rest2.owner && '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'
// console.log(rest2.owner);
// console.log(rest2);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for(const item of menu) console.log(item);
// for(const item of menu.entries()) {
//     console.log(`${item[0] + 1}: ${item[1]}`);
// }
// for (const [i, el] of menu.entries()) {
//     console.log(`${i + 1}: ${el}`);
// }