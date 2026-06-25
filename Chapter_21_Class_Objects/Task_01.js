class calculator {

    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }


    sum(){
        return this.num1 + this.num2; 
    }

    subtraction(){
        return this.num1 - this.num2;
    }

    multiplication(){
        return this.num1 * this.num2;
    }

    division(){
        return this.num1 / this.num2;
    }

    modulus(){
        return this.num1 % this.num2;
    }

}

const calc = new calculator(50, 10);

console.log("Sum:", calc.sum());
console.log("Subtraction:", calc.subtraction());
console.log("Multiplication:", calc.multiplication());
console.log("Division:", calc.division());
console.log("Modulus:", calc.modulus());