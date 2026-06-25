class Person {

    static nationality = "Indian";

    constructor(name) {
        this.name = name;
    }
     common_fn() {
        console.log(this.name + " is " + Person.nationality);
    }
}

console.log(Person.nationality);
const person = new Person("Mitesh");
console.log(person.name);

person.common_fn("Mitesh");