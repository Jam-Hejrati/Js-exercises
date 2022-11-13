"use strict"

// Promises
/*fetch("https://jsonplaceholder.typicode.com/todos/1").then(function (response) {
    return response.json()
}).then(function (data) {
    console.table(data)
})*/

// Custom Promises
const myPromise = new Promise((resolve , reject ) => {
    // pending - resolve - reject
    setTimeout(function(){
        resolve('It woreked.')
    } , 3000)
})
myPromise.then(function(data){
    console.log(data)
})