function checkValue(value) {
    if (value === undefined) {
        return "Value is undefined (not assigned yet)";
    }
    if (value === null) {
        return "Value is null (explicitly empty)";
    }
    return "Value is: " + value;
}

console.log(checkValue());           // Value is undefined (not assigned yet)
console.log(checkValue(null));       // Value is null (explicitly empty)
console.log(checkValue("hello"));    // Value is: hello