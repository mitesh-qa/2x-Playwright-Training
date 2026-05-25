
function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {
    if(
        hasSetup === true &&
        hasPractice === true &&
        hasNotes === true
    ) {
        return "READY";
    }

    return "BLOCKED";
}

console.log(checkJsBasicsReadinessGate("true", true, true));
