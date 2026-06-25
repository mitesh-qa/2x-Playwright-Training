/*
Element Visibility Checker
In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. 
Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) 
and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), 
and the ternary operator for severity level.

States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).
*/

function visibilityCheck(isPresent, isDisplayed, isEnabled) {

let result = (isPresent === true) && (isDisplayed === true) && (isEnabled === true) ? "READY" 
            : (isPresent === true) && (isDisplayed === true) && (isEnabled === false) ? "DISABLED"
            : (isPresent === true) && (isDisplayed === false) ? "HIDDEN"
            : (isPresent === false) ? "NOT FOUND" : "Invalid values";

switch(result) {
    case "READY" : return "OK"; break;
    case "DISABLED" : return "WARNING"; break;
    case "HIDDEN" : return "WARNING"; break;
    case "NOT FOUND" : return "CRITICAL"; break;
    default : "Invalid values"; break;
}
return result;

}

console.log(visibilityCheck(false,true, false));
