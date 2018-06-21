//ES5
var timer = function (timeout, message) {
    var timeout = timeout || 50;
    var message = message || 'Default Message';

    return {
        timeout: timeout,
        message: message
    }
}

console.log(timer(100, 'Hi There!'))
//console.log(timer(100))
//console.log(timer(0, 'Timeout is zero?'))


//ES6
var timer = function (timeout = 50, message = 'Default Message') {
    return {
        timeout: timeout,
        message: message
    }
}
//console.log(timer())
//console.log(timer(0, 'Timeout is zero'))