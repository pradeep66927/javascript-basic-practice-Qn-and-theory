
var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

// out put:-
 //10 
 //100
 //1
// IN CALL STACK=>GEC = GLOBAL EXECUTION CONTEXT  is happing here

//********************************************************************** */

// VIDEO-EPISODE 5  NAMASTE JAVA SCRIPT

var a = 10;            //<= global scope or global space
function  b ( ) {      //<= ,,    ,,     ,,   ,,  ,,    ,,      ,,   ,,
	var x = 1;         //<=local scope since it is inside the function.
}

Console.log(window.a)  // 10
console.log(a)      //10   it also gives same because it assume the we calling the a from global scope
console.log(this.a)  //10   all referring to the same place in memory space.

//**************************************************************** */
// VIDEO EP-6 
console.log(a)  // undefine means placeholder which has a allocated memory
var a = 10;
console.log(7)  // 10

console.log(x) // not define it means which has not been allocated meomery

//this line has not been axecuted yet but java script has all ready allocated
//the memory to a . so we all ready have reaserved memomery for a now
//write now a = undefine; to the variable it try to put placeholder it is 
//like a placeholder which is place in memory that special keyword is undefine
// undefine means it is taking memory

var a ;
console.log(a)       //undefine
if (a === undefined) {
    console.log('a is undefine')   // output this
} 
else {
    console.log('a is not undifine')
}

var a ;
console.log(a)       //undefine
a = 10;
if (a === undefined) {
    console.log('a is undefine')  
} 
else {
    console.log('a is not undifine') // out put will be this
}

//java script is a loosely type language, also known as weakly type language
// means it is very flexible in this case

var a ;
console.log(a);  // undefine 
a = 10 ;
console.log(a)  //10
a = 'hello world'

console.log(a) // hello world

a = undefined  // it is not a good practice to asign undefine to a variable
               // it consist a lot of inconsistency.
