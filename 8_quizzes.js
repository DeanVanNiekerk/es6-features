
//1. What will the below output?
for (var i = 0; i < 5; i++) {
	setTimeout(function() { 
        console.log(i); 
    }, i * 1000 );
}


//2. What will be the output when the following code is executed? Explain
console.log(false == '0')
console.log(false === '0')


//3. What will be the output of this code?
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();


//4. What will the following code output and why?
var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();


//4. What will the following code output to the console:
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));


