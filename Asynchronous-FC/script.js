"use strict"

// Promises
/*fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
    .then(function (data) {
        console.table(data)
    })
*/
// Custom Promises
/*const myPromise = new Promise((resolve , reject ) => {
    // pending - resolve - reject
    setTimeout(function(){
        resolve('It worked.')
    } , 3000)
})
myPromise.then(function(data){
    console.log(data)
})*/

// async / await
async function sendRequest() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode/todos/1")
        console.table(response)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}

sendRequest()