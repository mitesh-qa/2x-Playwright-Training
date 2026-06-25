/*
Test Environment Config
In CI/CD pipelines, tests run against different environments. 
Write a JavaScript program using a switch statement that takes 
an environment name stored in a variable and prints the base URL, 
API key pattern, and timeout. Use const for fixed values and let for the assembled config.

Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.
*/

function getEnvironmentConfig(environment) {

    // Fixed values
    const DEFAULT_TIMEOUT = 30000;

    // Config object that will be assembled
    let config = {};

    switch (environment.toLowerCase()) {

        case "dev":
            config = {
                baseUrl: "https://dev-api.company.com",
                apiKeyPrefix: "DEV-",
                timeout: 10000,
                description: "Development Environment"
            };
            break;

        case "qa":
            config = {
                baseUrl: "https://qa-api.company.com",
                apiKeyPrefix: "QA-",
                timeout: 15000,
                description: "QA Testing Environment"
            };
            break;

        case "staging":
            config = {
                baseUrl: "https://staging-api.company.com",
                apiKeyPrefix: "STG-",
                timeout: 20000,
                description: "Pre-Production Staging Environment"
            };
            break;

        case "prod":
        case "production":
            config = {
                baseUrl: "https://api.company.com",
                apiKeyPrefix: "PROD-",
                timeout: DEFAULT_TIMEOUT,
                description: "Production Environment"
            };
            break;

        default:
            console.log("❌ Invalid Environment");
            return;
    }

    console.log("===== ENVIRONMENT CONFIG =====");
    console.log("Environment :", environment);
    console.log("Base URL    :", config.baseUrl);
    console.log("API Key     :", `${config.apiKeyPrefix}XXXXXX`);
    console.log("Timeout     :", `${config.timeout} ms`);
    console.log("Description :", config.description);
}

// Change environment here
getEnvironmentConfig("staging");