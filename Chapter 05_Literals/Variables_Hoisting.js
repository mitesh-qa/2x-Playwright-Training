//var

console.log(a); // undefined
var a = 10;

//let

console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

//const

console.log(a); // ReferenceError: Cannot access 'a' before initialization
const a = 10;
