function calculateJsBasicsWeightedScore(passed, failed, skipped) {
  return (passed * 2) - failed;
}

console.log(calculateJsBasicsWeightedScore(3, 0, 0));