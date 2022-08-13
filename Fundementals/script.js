'use strict';


//IIFE
(function () {
    console.log("this will never run again")
    const isPrivate = 23
})();

(() => console.log('this will ALSO never run again'))()