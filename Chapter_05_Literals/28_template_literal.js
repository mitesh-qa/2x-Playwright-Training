let firstname = "Mitesh";
let message = `Hi ${firstname} Parmar`; // Use Backtick
console.log(message);

// Playwright
const rowIndex = 3;
const columnName = "email";
const locator1 = (`[data-row="${rowIndex}"] [data-col="${columnName}"]`);
console.log(locator1);