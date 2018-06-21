
//ES5 - Callback Pattern
const timer = function(complete) {
    setTimeout(function() {
        complete();
    }, 2000);
}

timer(function() {
    console.log('DONE!');
})



//ES6
const timer2 = function() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, 2000);
    })
}

timer2().then(function() {
    console.log('DONE with Promises!')
})