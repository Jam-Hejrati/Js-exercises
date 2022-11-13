"use strict"

// Promises
fetch("https://jsonplaceholder.typicode/todos/1")
    .then(function (response) {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
    .then(function (data) {
        console.table(data)
    })

// Custom Promises
/*const myPromise = new Promise((resolve , reject ) => {
    // pending - resolve - reject
    setTimeout(function(){
        resolve('It woreked.')
    } , 3000)
})
myPromise.then(function(data){
    console.log(data)
})*/