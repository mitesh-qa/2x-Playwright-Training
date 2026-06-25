/*
Login Brute-Force Detection
Write a JavaScript program that simulates a login system with brute-force detection.
The system should lock the account after 3 consecutive failed attempts. 
Use a do...while loop to process login attempts from an array. 
Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). 
Validate using strict equality (===) and logical operators (&&).
*/

function loginDetection() {

    const credentials = [
        { username: "admin", password: "wrong1" },
        { username: "admin", password: "wrong2" },
        { username: "admin", password: "wrong3" }
    ];

    const expUsername = "admin";
    const expPassword = "admin123";

    let loginAttempts = 0;
    let maxAttempts = 3;
    let isLoggedIn = false;
    let i = 0;

    do {

        if (
            credentials[i].username === expUsername &&
            credentials[i].password === expPassword
        ) {
            console.log("✅ Login Successful!");
            isLoggedIn = true;
        } else {
            loginAttempts++;
            console.log(`❌ Login Failed - Attempt ${loginAttempts}`);
        }

        i++;

    } while (
        i < credentials.length &&
        loginAttempts < maxAttempts &&
        !isLoggedIn
    );

    if (!isLoggedIn && loginAttempts >= maxAttempts) {
        console.log("🚨 Account Locked! Too many failed attempts.");
    }
}

loginDetection();