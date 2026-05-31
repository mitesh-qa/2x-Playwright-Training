let rajkumar_age = 18;
let rj_will_go_goa = rajkumar_age >= 18 ? "RJ will go goa" : "No Goa";
console.log(rj_will_go_goa)


let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log(testResult);  // ✅ PASS

let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);