
/*
Test Case Result Counter
After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). 
Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. 
Print a test report with total tests, counts, pass rate percentage, 
and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).
*/

function questionName(input) {
  
let passCount = 0;
let failCount = 0;
let skipCount = 0;

for (let i = 0; i < input.length; i++) {

    if (input[i] === "pass") {
        passCount++;
    } 
    else if (input[i] === "fail") {
        failCount++;
    } 
    else if (input[i] === "skip") {
        skipCount++;
    }
}

const totalinput = input.length;
const passRate = ((passCount / totalinput) * 100).toFixed(2);

let verdict;

if (failCount === 0) {
    verdict = "READY FOR RELEASE";
} 
else if (failCount <= 2) {
    verdict = "Minor failures. Review before release.";
} 
else {
    verdict = "BLOCK RELEASE";
}

    return `Total Tests : ${totalinput}, Passed: ${passCount}, Failed: ${failCount}, Skipped: ${skipCount}, Pass Rate: ${passRate}, VERDICT: ${verdict}`;

}




console.log(questionName(["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]));


