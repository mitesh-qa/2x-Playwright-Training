// This is a type-2 function, with parameter/argument, but no return. 

function greetByName(name) {
    console.log("Hi ", name);
}

greetByName("Pramod");
let result = greetByName("Amit");
console.log(result);                // There is no Return value so its not printed anything in console.log


function begger(money) {
    console.log("Thanks", money);
}

let returnMesomething = begger(100);
console.log(returnMesomething);         // There is no Return value so its not printed anything in console.log