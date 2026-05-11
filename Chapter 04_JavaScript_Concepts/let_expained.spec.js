

let a = 10;// Global SCOPE

console.log("Global: ",a);

function printHello() {

    let a = 20; // Local Scope
    console.log("Print from for loop: ",a);

    if (true) {
        let a = 30;
        console.log("Print from If statement: ", a); // 30
    }

}
printHello();

//let a = 50;   //It will not allow to declare with same variable name again
a = 50;         //It will allow to assign another value in same identifier
console.log("Second global: ", a);
