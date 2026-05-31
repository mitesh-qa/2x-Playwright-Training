// JavaScript Identifier Rules - Single Example
// ============================================

// 1. Must begin with a letter, underscore, or dollar sign
let validName = "starts with letter";
let _private = "starts with underscore";
let $jquery = "starts with dollar sign";

// 2. Subsequent characters may include digits
let item1 = "letter then digit";
let _temp2 = "underscore then digit";
let $var123 = "dollar then digits";
let a1_b2 = "mixed letters digits underscore";

// 3. CANNOT start with a digit (these would throw SyntaxError if uncommented)
// let 1stPlace = "invalid";     // SyntaxError: Invalid or unexpected token
// let 2ndItem = "invalid";      // SyntaxError

// 4. CANNOT be a reserved keyword (these would throw SyntaxError if uncommented)
// let class = "invalid";        // SyntaxError: Unexpected token 'class'
// let const = "invalid";        // SyntaxError
// let function = "invalid";     // SyntaxError

// 5. Identifiers are CASE-SENSITIVE
let myVar = "lowercase v";
let myvar = "lowercase v"; // Different identifier!
let MyVar = "uppercase M"; // Another different identifier!
console.log(myVar !== myvar); // true
console.log(myVar !== MyVar); // true

// 6. Unicode letters and Unicode escape sequences are allowed
let café = "Unicode letter é";
let 变量 = "Chinese characters";
let \u0041 = "Unicode escape for A"; // Equivalent to: let A = ...
let \u005f = "Unicode escape for _"; // Equivalent to: let _ = ...

// 7. CANNOT contain spaces, hyphens, or special characters (except _ and $)
// let my-name = "invalid";      // SyntaxError: Unexpected token '-'
// let my name = "invalid";      // SyntaxError: Unexpected identifier
// let my@name = "invalid";      // SyntaxError: Unexpected token '@'
// let my#name = "invalid";      // SyntaxError: Unexpected token '#'
// let my!name = "invalid";      // SyntaxError: Unexpected token '!'