function findFirstCriticalJsBasicsBug(bugs) {
  const criticalBug = bugs.find(
    bug => bug.severity.toLowerCase() === "critical"
  );

  return criticalBug
    ? criticalBug.title
    : "No critical bug";
}

console.log(findFirstCriticalJsBasicsBug([{"title":"Typo","severity":"low"},{"title":"Login crash","severity":"critical"}]));