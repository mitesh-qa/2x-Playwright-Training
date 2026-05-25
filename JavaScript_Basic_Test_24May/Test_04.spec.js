function getJsBasicsKeywordMeaning(term) {
  switch(term.trim()) {
    case "NODE": return "runtime";
    case "v8": return "engine";
    case "npm": return "package-manager";
    case "not-a-topic": return "unknown";
    default: return "unknown";
  }
}

console.log(getJsBasicsKeywordMeaning(" v8 "));