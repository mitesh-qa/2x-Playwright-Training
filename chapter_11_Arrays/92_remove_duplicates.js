
let testResults = ["pass", "fail", "pass", "skip"]; // Add  Array values

let uniqueResults = [...new Set(testResults)];

console.log(uniqueResults);