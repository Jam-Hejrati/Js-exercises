"use strict"

// Promises
fetch("https://jsonplaceholder.typicode.com/todos/1").then(function (response) {
    return response.json()
}).then(function (data) {
    console.table(data)
})
