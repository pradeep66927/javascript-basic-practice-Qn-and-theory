
var x = 7;

function getName() {
    console.log("hello pradeep")
}
getName()
console.log(x)

//****************************************************************** */
// it also will give the same result only variable can't be call before 
// initialize  but function can be called before defining

getName()         // can be call befor defining function
console.log(x)    //  undefine 

var x = 7;

function getName() {
    console.log("hello pradeep")
}

//************************************************************** */
console.log(x)    // not  define 

// for function and varible you can call without initialise it
// that is called hosting
function getName() {
    console.log("hello pradeep")
}
console.log(getName)

//****** or below give same result****************** */
console.log(getName)
function getName() {
    console.log("hello pradeep")
}


getName()
console.log(getName)
var getName2 = function () {   // it's behave like another variable undefine
}
var getName = () => {          // it's also
    console.log("hello pradeep")
}

