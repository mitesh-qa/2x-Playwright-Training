let a=15;
let b=10;
let c=18;

let max = (a > b && a > c) ? a : (b > c && b > a) ? b : c;

console.log("Maximum Number  is ", +max);