

var a = 10;// Global SCOPE

console.log("Global: ",a);

function printHello() {

    var a = 20; // Local Scope
    console.log("Print from for loop: ",a);

    if (true) {
        var a = 30;
        console.log("Print from If statement: ", a); // 30
    }

}
printHello();

var a = 50;   //It will allow to declare with same variable name again
console.log("Second global: ", a);

a = 60;     //It will allow to assign another value in same identifier
console.log("Third global: ", a);