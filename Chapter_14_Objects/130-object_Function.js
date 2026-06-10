const user = {
    name: "Pramod",
    age: 43
}

const calculator = {
    value: 10,
    add(n) {
        return n = n+this.value;
    },
    subtract(n) {
        return n = n-this.value;
    }
}


console.log(calculator.add(15));

console.log(calculator.subtract(15));