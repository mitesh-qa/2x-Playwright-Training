// Objects
// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Virat" };
let student3 = { name: "Virat", age: 87, phone: 987654320 };

// Key will not be in the double quotes
// below key in double quotes is actually JSON

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };


let a = { status: "pass" };
// console.log(a.status);
// console.log(a["status"]);

// let a1 = { status: 'pass' };
// console.log(a1.status);

let b = a;
b.status = "fail";
console.log(a.status);
console.log(b.status);

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (a === b) {
    console.log("true");
} else {
    console.log("false");
}