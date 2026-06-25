/*
Retry Failed API Call
In automation testing, API calls sometimes fail due to network issues. 
Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
The program should retry a maximum of 5 times. 
Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). 
Log each attempt and print the final result.
*/


function questionName(input) {
const MAX_ATTEMPTS = input;
let attempt = 0;
let success = false;
let result;

do {
    attempt++;

    // 40% chance of success
    const randomValue = Math.random().toFixed(2);

    console.log(randomValue);

    if (randomValue > 0.6) {
        success = true;
        console.log(`Attempt ${attempt}: ✅ SUCCESS (Response 200 OK)`);
    } else {
        console.log(`Attempt ${attempt}: ❌ FAILED (Timeout/Error)`);
    }

    } while (!success && attempt < MAX_ATTEMPTS);

        if (success) {
            result = `API call PASSED after ${attempt} attempt(s).`;
        } else {
            result = `API call FAILED after ${MAX_ATTEMPTS} attempt(s).`;
        }

    return result;

    }

    console.log(questionName(5));

