console.log('testing')
// difference between function statement vs function expression is
// hoisting 
a();    // it can be called above the function 
b();    // it can't be called above the function beacause it define as varible

function a() {              // function statement
    console.log('a colled')
}
a()  // this way of creating function is colled function statement

var b = function () {       // function expression
    console.log('b colled')
}
b()

// function statement == same as function decleration.


function () {
       // it is a anoynomus function without a fun name
}
// anonynomus function:-anonymous fun is used when the function are used as
// a value 
var c = function(){     // it can asign as in a variable only anony... func

}

 
// Named function expression :- giving name to function
var b = function xyz() {
    console.log('b called');
}
b();
xyz();  // error will occure

//FIRST CLASS FUNCTION or first class citizens :- the ability to use  the function as value is known as first class function , assign as a value , a function pass as argument in function , return as function this all ability together is called first class function.

var  c =  function xyz (param1) {
    return function (){ // return function xyz()

    }
    //console.log()
}
 
function xyz(){

}
c(function () {

})
c(xyz); // or console.log(b())

//************************************* */
// ARROW FUNCTION 


