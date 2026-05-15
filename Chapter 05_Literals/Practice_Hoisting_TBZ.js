{
    let x = 1;

    {
        console.log(x); // ❌ TDZ
                        // ReferenceError: Cannot access 'x' before initialization
        let x = 2;
    }
}

{
    var x = 1;

    {
        console.log(x); // Output: 1                        
        var x = 2;
    }
}

{
    const x = 1;

    {
        console.log(x); // ReferenceError: Cannot access 'x' before initialization                       
        const x = 2;
    }
}

{
console.log(a);     // undefined
console.log(b);     // ReferenceError: Cannot access 'b' before initialization
console.log(c);     // ReferenceError: Cannot access 'c' before initialization

var a = 10;
let b = 20;
const c = 30;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
}