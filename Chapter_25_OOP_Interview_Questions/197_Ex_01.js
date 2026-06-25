class Bug {

    constructor(title, severity) {
        this.title = title;
        this.severity = severity;
    }

    static display() {
        console.log("[" + Bug.saverity + "] " + Bug.title);
    }
}

let b1 = new Bug("Login crash", "Critical");
let b2 = new Bug("Typo in footer", "Low");

b1.display();
b2.display();
