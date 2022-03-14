
//SCOPE :-scope means where we can access a specific variable or a function 
//       in our code  and scope is directly dependent on laxical environment

//laxical environmet:-

console.log("hello")

function a( ) {                                  
	console.log(b);                   
}                                                        
var b = 10;                                            	
a( );             //10 

//********************************* */
console.log("hello")

function a( ) {
    c();
    function c (){
        console.log(b);
    }                                  
	console.log(b);                   
}                                                        
var b = 10;                                            	
a( );             //10 




