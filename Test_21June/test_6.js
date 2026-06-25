/*
Bug Severity Classifier
As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") 
and impact ("blocker", "major", "minor"). 
Write a JavaScript program using nested if-else that prints the bug severity level.

Classification Matrix:
- always + blocker → P0 | always + major → P1 | always + minor → P2
- often + blocker → P1 | often + major → P2 | often + minor → P3
- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4
*/

function bugCassifier(frequency, impact) {

    let frq = frequency.toLowerCase();
    let imp = impact.toLowerCase();
    let result;

    if((frq === "always") && (imp === "blocker")) {
        return result = "PO";
    }
    else if(((frq === "always") && (imp === "major")) || ((frq === "often") && (imp === "blocker"))) {
        return result = "P1";
    }
    else if(((frq === "always") && (imp === "minor")) || ((frq === "often") && (imp === "major")) || ((frq === "rarely") && (imp === "blocker")) ) {
        return result = "P2";
    }
    else if(((frq === "often") && (imp === "minor")) || ((frq === "rarely") && (imp === "major"))) {
        return result = "P2";
    }
    else  if((frq === "rarely") && (imp === "minor")) {
        return result = "PO";
    }
    else {
        return "Please enter correct Frequency and Impact";
    }

}

console.log(bugCassifier("always", "minor"));