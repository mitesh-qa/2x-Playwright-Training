function summarizeJsBasicsMatrix(matrix) {
 const allResults = matrix.flat();

  const passed = allResults.filter(result =>
    result.toLowerCase().includes("pass")
  ).length;

  const failedCases = allResults.filter(result =>
    result.toLowerCase().includes("fail")
  );

  const failed = failedCases.length;

  return {
    total: allResults.length,
    passed,
    failed,
    failedCases
  };


}

console.log(summarizeJsBasicsMatrix([["login-pass"],["checkout-fail"]]));