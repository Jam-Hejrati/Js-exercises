// 'use strict';

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

