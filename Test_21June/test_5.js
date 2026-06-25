/*
Test Data Generator
As an SDET, you frequently need to generate test data for form testing. 
Write a JavaScript program that generates test user data using a for loop. 
Each user should have a unique ID (USR-0001 format), 
name, email, and role (cycling through: admin, editor, viewer, tester, manager). 
Every 3rd user should be inactive (edge case testing). 
Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).
*/

function dataGenerator(value) {

    var role = ["admin", "editor", "viewer", "tester", "manager"];
    var counter = 1; // demonstrate var (global-ish counter)

    for (let i = 0; i < value; i++) {
        let generateId = counter.toString().padStart(4, '0');
        let id = `USR-${generateId}`; // USR-0001
        counter++;
        const name = Math.random().toString(36).slice(2, 10);
        const email = name + "@gmail.com";
        const userRole = role[i % role.length];
        const active = ((i+1) % 3 !== 0); 
        console.log({ id, name, email, userRole, active });
    }
}

dataGenerator(10);


/*
    function generateUserId() {
        const genId = Math.floor(Math.random() * 9999 + 1)
            .toString()
            .padStart(4, '0');

        let userId = `USR-${genId}`;
        return userId;
    }

*/