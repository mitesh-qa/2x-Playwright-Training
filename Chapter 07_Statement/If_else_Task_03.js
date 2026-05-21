/*
Question 3 — Bug Severity Classifier

Problem: Given a bug's impact score (1–10), classify the severity.

9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score

Sample Input/Output:

Input: 9
Output: Severity: Critical — Block release

Input: 5
Output: Severity: Medium
*/

let bugScore = 10;

if(bugScore >= 9 && bugScore <= 10) {
    console.log("Critical (block release)");
}
else if(bugScore >= 7 && bugScore <= 8) {
    console.log("High");
}
else if(bugScore >= 4 && bugScore <= 6) {
    console.log("Medium");
}
else if(bugScore >= 1 && bugScore <= 3) {
    console.log("Low");
}
else {
    console.log("Invalid Score");
}