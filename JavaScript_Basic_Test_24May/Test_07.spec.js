
function summarizeJsBasicsResults(results) {
const summary = {
    pass: results.filter(result =>
      result.toLowerCase().includes("pass")
    ).length,

    fail: results.filter(result =>
      result.toLowerCase().includes("fail")
    ).length,

    skip: results.filter(result =>
      result.toLowerCase().includes("skip")
    ).length
  };

  summary.total = summary.pass + summary.fail + summary.skip;

  return summary;

}

console.log(summarizeJsBasicsResults(["login-pass","api-fail","logout-pass"]));