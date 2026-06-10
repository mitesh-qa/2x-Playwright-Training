function add(a, b, c) {
    return a + b + c;
}

let num = [];

function add1(...num) {
     return num.reduce((sum, current) => sum + current, 0);
}

console.log(add1(1,2,3,4));


let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
console.log(hasError(...responseCodes)); // true