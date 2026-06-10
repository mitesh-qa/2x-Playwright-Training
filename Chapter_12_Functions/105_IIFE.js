//IIFE function calls itself.

(function () {
    console.log("Hi");
})();


(function () {
    // playwright to run the test
})();

(function () {
    console.log("Staging")
})();

//IIFE with Arrow function
(() => {
    console.log("Setup complete");
})();