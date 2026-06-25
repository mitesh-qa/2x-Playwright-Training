/*
Response Time SLA Analyzer
As a performance tester, you collect API response times in milliseconds. 
Write a JavaScript program using a while loop that analyzes an array of response times 
and prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). 
Use comparison operators for min/max tracking.
*/

function slaAnalyzer(...response) {
    
    let responseArr = [...response];

    let total = responseArr.length;
    console.log("Array Length: ", total);

    let min = responseArr.sort((a,b) => a - b)[0];
    console.log("Minimum time: ", min);

    let max = responseArr.sort((a,b) => b - a)[0];
    console.log("Maximum time: ", max);

    let totalSum = responseArr.reduce((a, b) => a + b, 0);
    let avg = totalSum/total;
    console.log("Average Time: ", avg);

    let i = 0;
    let threshold = 0;
    while (responseArr[i] > 500) {    
        threshold++;
        i++;
    }
    console.log("how many responses breached the SLA threshold?: ", threshold);
}

slaAnalyzer(200, 250, 505, 450, 600, 800, 200, 150, 350, 500);