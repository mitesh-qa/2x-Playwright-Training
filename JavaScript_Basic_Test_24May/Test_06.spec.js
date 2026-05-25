function countPassingJsBasicsChecks(results) {
  return results.filter(result =>
    result.toLowerCase().includes("pass")
  ).length;
}

console.log(countPassingJsBasicsChecks(["login-pass","api-fail","logout-pass"]));