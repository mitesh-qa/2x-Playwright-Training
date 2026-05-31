/*
Question 4 — Build Health Reporter

Problem: Given the percentage of test cases passed in a CI build, report build health.

100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)

Sample Input/Output:

Input: 95
Output: 🟡 Stable — Investigate failures

Input: 65
Output: 🔴 Broken Build — Block deployment
*/

let buildHealthScore = "50%";
let buildHealth = parseInt(buildHealthScore);

if(buildHealth === 100){
    console.log("✅ Green Build");
}
else if(buildHealth >= 90 && buildHealth <= 99){
    console.log("🟡 Stable (investigate failures)");
}
else if(buildHealth >= 70 && buildHealth <= 89){
    console.log("🔴 Unstable");
}
else if(buildHealth <= 70 && buildHealth >= 0){
    console.log("❌ Broken Build (block deployment)");
}
else {
    console.log("Invalid Build Health entered.");
}
