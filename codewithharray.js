console.log('welcome to tut6');
const $name = "pradeep";
const greeting = "good morning";

//****************************** */
//add two string or concate by using + 

console.log(greeting + " " + $name);

let html

html = "<h1>this is my first heading <h1>" + "<P>this is my para<P> ";
console.log(html);

// add two string by using concat ****************/

html= html.concat('this'," stri2");
console.log(html);

//************************************ */

console.log(html.length)

//************************************* */

console.log(html.toLowerCase()) //it change only for this line not original

//********************************************** */

console.log(html.toUpperCase())

//********************************** */

// INDEXING OF STRING 

console.log(html[1]) ;  //h
console.log(html.indexOf("this"));   // 4
console.log(html.indexOf('stedjfkd'));  // if there is not that word than it will show -1
console.log(html.lastIndexOf('<'));    //51
console.log(html.charAt(5));          //h
console.log(html.endsWith('stri2'));  //true
console.log(html.includes('my'));      //true
console.log(html.substring(1,8));      //h1>this
console.log(html.slice(-5));   //stri2 last from 5 letters
console.log(html.split(' ')); //it split all word whare is space
console.log(html.replace('this','it')); //it replace only first occurence

//************************************************ */

// BACKTICK (``)use string cancate or variable 
let fruit1 = 'orange\'';
let fruit2 = 'apple'

let myHtml = `hello ${$name} 
                <h1> this is my "heading" <h1>
                <p> i think you must like ${fruit1} and 
                ${fruit2}`
console.log(myHtml);
//Document.body.innerHTML = myHtml;

//********************************************** */









