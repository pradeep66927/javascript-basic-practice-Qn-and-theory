//VIDEO EP-9   BLOCK SCOPE    & shadowing js

// What is a Block  in JS ?
// `Let and const are Block Scoped`

// Block is defined by this curly bracket { 
// 	//bock is also known as COMPOUND STATEMENT 
// 	var a = 10;
// 	console.log(a);
// }                                 this block is combining multiple javascript statements in a 
// 			     group
// A Block is used to combine multiple javascript statements in one group . 
// We grouped multiple statements together in a block  so that we can use it where javascript expects one statement. 

// if (true);         this run in vs  it shows  syntax error because this if expects a state-
//                      -ment  over here   ONE STATEMENT
//  If (true) true ;     // no error    because  this is perfectly valid ONE statement 
//                            But If we want to write multiple statement  we can only do that 
//                            By grouping them together so we can use this block to { } to 
//                            Grouping the statement in so this group of statements can used 
//                     In a place Where javascript expecting single statement
// BOCK SCOPE:- what all variable & function we can access in side this block
//                            That is known as block scope statement

// 1 {
// 2	var a= 10;
// 3	let b = 20;
// 4	const = 30;
// 5	console.log(a);      // 10
// 6	console.log(b);      //20
// 7	console.log(c);      //30
// 8 }
// 9 console.log(a);       // 10
// 10 console.log(b);       // ReferenceError : b is not defined 
// 11 console.log(c);       // ReferenceError : c is not defined 
//                               because  b and c is not in GLOBAL SCOPE.

// b and c seen inside the block scope this is the separate space where these b and c are HOISTED and assigned undefined, that is reserved block scope for let and const

// var  a is HOISTED in GLOBAL space 
// Once  the javascript finished the executing this block when it goes to line number  8 these variable let and const  are no longer accessible ,the block scope gone from the block now , you can’t access these let and const outside this block that is known as let & const are in block scope
//         Where as you can access this “  var a “ even outside of this  block

// WHAT IS SHADOWING IN JS :-
// 1 var  a = 100    //If you have same name variable outside of this block
// 2 {
// 3	var a= 10;   // this variable shadows above line 1 variable
// 4	let b = 20;
// 5	const = 30;
// 6 	console.log(a);      // 10
// 6	console.log(b);      //20
// 7	console.log(c);      //30
// 10 }
// 11 console.log(a)    //10  var 10 is shadow and also modified the the var 100 to 10

// //******************************************************************************//
// 1 let  b = 100    //If you have same name variable outside of this block
// 2 {
// 3	var a= 10;     
// 4	let b = 20;   // this variable shadows above line 1 variable
// 5	const = 30;
// 6 	console.log(a);      // 10     global memory scope
// 6	console.log(b);      //20      block memory scope
// 7	console.log(c);      //30      block memory scope
// 10 }
// 11 console.log(b)    //100           script memory scope not in global scope

// Block            1st memory scope
//    b:20
//    c=30
// Script            2nd memory scope
//    b:100
// Global           3rd memory scope
//   a:10
// THIS HAPPENS SAME WITH CONST  

// Shadowing is the not only concept in block it behaves the same way in even in function also
// var c= 100;
// function x( ) {
// 	var c = 30;
// 	console.log(c);       //
// }
// x( );       //30
// console.log(c)     //100

// ILLEGAL SHADOWING:-
// var a = 10;
// {

// 	var a = 10     // it’s okay 
// }

// let a =20;
// {
// 	var = 20;        //illegal shadowing  var can’t cross the boundry 
// }

// Let a=20;
// {
// 	let a=20;       //IT’S okey
// }

// var a=20;
// {
// 	let a = 20; it's also okey
// }

// let a= 20;
// function x( ) {
// 	Var a= 20    // it's okay  because var is function scope or it is inside his 
// 			boundary.
// }


// Const a = 20;
// {
// 	Const a= 100;
// 	{
// 		const a = 200;
// 	}
// }
// console.log(a)    //20

// //***********************************************************//


