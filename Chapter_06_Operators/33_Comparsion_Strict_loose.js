// == loose compasion
// === strick comparison

console.log(42 == "42");    // true
console.log(42 === "42");   // false - data type and converted value

console.log(5 === 5);       //true
console.log(5 === "5");     //false


console.log(0 == "");   // true ?  "" = conveted to 0 - checked by the loose
console.log(0 === "");  // false


console.log(true == 1);     // true
console.log(false == 0);    // true
console.log(true == "1");   // true
console.log(true == 2);     // false


console.log(5 != "5"); // false  - loose
console.log(5 !== "5"); // true  - strick


// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.

console.log(0 == "");   // true
console.log(0 == "0");  // true
console.log("" == "0");  // false 🤯 (transitivity broken!)


console.log(0 == false);            // true
console.log(null == 0);             // false 
console.log(null == undefined);     // true
console.log(null === undefined);    // false 
