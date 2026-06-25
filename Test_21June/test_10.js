/*
Mini Test Suite Runner
Build a mini test suite runner that executes test cases and generates a summary report. 
This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while, 
operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

Each test case has a name, expected value, actual value, 
and comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan). 
Run all tests, track pass/fail/error counts, find consecutive passes from start (while loop), 
find first failure (do...while), and print a comprehensive report.
*/

function miniTestSuiteRunner() {

    // Test Cases
    const testCases = [
        {
            name: "Strict Equal Test",
            expected: 10,
            actual: 10,
            comparisonType: "strictEqual"
        },
        {
            name: "Loose Equal Test",
            expected: 5,
            actual: "5",
            comparisonType: "looseEqual"
        },
        {
            name: "Type Check Test",
            expected: "number",
            actual: 100,
            comparisonType: "typeCheck"
        },
        {
            name: "Truthy Test",
            expected: true,
            actual: "Playwright",
            comparisonType: "truthy"
        },
        {
            name: "Less Than Test",
            expected: 100,
            actual: 50,
            comparisonType: "lessThan"
        },
        {
            name: "Failure Test",
            expected: 50,
            actual: 60,
            comparisonType: "strictEqual"
        }
    ];

    // Counters
    let passCount = 0;
    let failCount = 0;
    let errorCount = 0;

    // var example
    var suiteName = "Mini Test Suite";

    const results = [];

    console.log(`\n===== ${suiteName} =====\n`);

    // FOR LOOP
    for (let i = 0; i < testCases.length; i++) {

        const test = testCases[i];

        const testName = test.name ?? "Unnamed Test";

        let status = "FAIL";

        try {

            switch (test.comparisonType) {

                case "strictEqual":
                    status =
                        test.actual === test.expected
                            ? "PASS"
                            : "FAIL";
                    break;

                case "looseEqual":
                    status =
                        test.actual == test.expected
                            ? "PASS"
                            : "FAIL";
                    break;

                case "typeCheck":
                    status =
                        typeof test.actual === test.expected
                            ? "PASS"
                            : "FAIL";
                    break;

                case "truthy":
                    status =
                        test.actual
                            ? "PASS"
                            : "FAIL";
                    break;

                case "lessThan":
                    status =
                        test.actual < test.expected
                            ? "PASS"
                            : "FAIL";
                    break;

                default:
                    throw new Error(
                        `Invalid comparison type: ${test.comparisonType}`
                    );
            }

            if (status === "PASS") {
                passCount++;
            } else {
                failCount++;
            }

        } catch (error) {

            status = "ERROR";
            errorCount++;

            console.log(`Error: ${error.message}`);
        }

        results.push({
            testName,
            status
        });

        console.log(`${testName} --> ${status}`);
    }

    console.log("\n===== ANALYSIS =====");

    // WHILE LOOP
    let consecutivePasses = 0;

    while (
        consecutivePasses < results.length &&
        results[consecutivePasses].status === "PASS"
    ) {
        consecutivePasses++;
    }

    console.log(
        `Consecutive Passes From Start: ${consecutivePasses}`
    );

    // DO-WHILE LOOP
    let firstFailureIndex = -1;
    let index = 0;

    if (results.length > 0) {

        do {

            if (results[index].status !== "PASS") {
                firstFailureIndex = index;
                break;
            }

            index++;

        } while (index < results.length);
    }

    console.log(
        `First Failure Index: ${
            firstFailureIndex !== -1
                ? firstFailureIndex
                : "No Failures"
        }`
    );

    // Operators examples
    const totalTests = results.length || 0;

    const suiteStatus =
        (failCount === 0 && errorCount === 0)
            ? "SUCCESS"
            : "FAILED";

    console.log("\n===== SUMMARY REPORT =====");

    console.log(`Total Tests       : ${totalTests}`);
    console.log(`Passed            : ${passCount}`);
    console.log(`Failed            : ${failCount}`);
    console.log(`Errors            : ${errorCount}`);
    console.log(`Suite Status      : ${suiteStatus}`);

    console.log("\n===== DETAILED REPORT =====");

    for (let i = 0; i < results.length; i++) {
        console.log(
            `${i + 1}. ${results[i].testName} --> ${results[i].status}`
        );
    }
}

miniTestSuiteRunner();