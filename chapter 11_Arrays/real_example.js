let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);
console.log(browser);

browser.pop();                  //removed last browser
console.log(browser);

let removed = browser.shift();  //removed first browser
console.log(browser);           //print remaining browsers
console.log(removed);           //print deleted browser


let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {

        console.log("Opera is removed from the selenium!");
    }
}