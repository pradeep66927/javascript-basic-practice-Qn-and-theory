console.log('tute7 ,let discuss about arrays ')
let marks = [21,65,67,21,81,34,23]
const fruits = ['apple','pineapple','orange']
const mixed = ['str',89, [23,21]]

const arr = new Array(23,43,56,'orange')

console.log(arr)
console.log(mixed)
console.log(fruits)     //
console.log(fruits[1])  //pineapple

console.log(arr.length)
console.log(Array.isArray('asdf'))
arr[0]='pradeep'
console.log(arr)

//********************************* */
// MUTATING OR MODIFYING ARRAYS
//console.log(marks);
//marks.push(30) // add element in last
//marks.unshift(400) //add element in starting 
//marks.pop()    //remove last element from array
//marks.shift()  //remove first element from array
//marks.splice(4,2)  // 2 element ko remove karega index 4 se suru kar
//marks.reverse();  //it make arrays ulta 
//let marks2 = [5,6,7]
//marks = marks.concat(marks2) // it added another array to old array

//console.log(marks)

//********************************************* */

//OBJECT IN JAVA SCRIPT 
myobj = {
    'name':'pradeep',
    'channel':'t4g',
    'inActive':true,
    'marks':[1,2,3,4]

}

console.log(myobj.name);   // both work same
console.log(myobj['name'])
console.log(myobj.marks)