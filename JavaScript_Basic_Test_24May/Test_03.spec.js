function classifyJsBasicsScore(score) {
  
if(score <= 100 && score >=90) {
    return "EXCELLENT";
}
else if (score < 90 && score >= 75) {
    return "GOOD";
}
else if (score < 75 && score >= 50) {
    return "NEEDS_PRACTICE";
}
else if (score < 50 && score >= 0) {
    return "REVISIT";
}
else
    return "Score is not valid Number";
}

console.log(classifyJsBasicsScore(5));