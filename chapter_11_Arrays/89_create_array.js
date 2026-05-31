//#1: assign array values directly

let testResults = ["pass", "fail", "pass", "skip"]; // Add  Array values
console.log(testResults);

//#2: create empty array and then assign values
let scores = new Array(3);// here the 3 is length - empty array
scores[0] = 1;
scores[1] = 2;
scores[2] = 3;

console.log(scores);

//#3: create arrayusing Array.of
let test = Array.of(10, 20, 30, 40, 50);
console.log(test);
