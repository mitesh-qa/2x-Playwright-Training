class Student {

    // Static Variable
static batchName = "Playwright 2x Batch";

    // Constructor (Non-Static Variables)
constructor(id, name, age, city) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.city = city;
    }

    // Non-Static Method
print() {
    console.log(`
        Student ID   : ${this.id}
        Student Name : ${this.name}
        Age          : ${this.age}
        City         : ${this.city}
        Batch        : ${Student.batchName}
        --------------------------------
        `);
    }

    // Static Method
static batchInfo() {
        console.log(`Welcome to ${Student.batchName}`);
        console.log("--------------------------------");
    }
}

// Calling Static Method
Student.batchInfo();

// Creating 10 Student Objects
const student1 = new Student(1, "Rahul", 25, "Ahmedabad");
const student2 = new Student(2, "Priya", 24, "Surat");
const student3 = new Student(3, "Amit", 26, "Vadodara");
const student4 = new Student(4, "Neha", 23, "Rajkot");
const student5 = new Student(5, "Vijay", 27, "Pune");
const student6 = new Student(6, "Anjali", 22, "Mumbai");
const student7 = new Student(7, "Karan", 28, "Delhi");
const student8 = new Student(8, "Pooja", 24, "Jaipur");
const student9 = new Student(9, "Rohan", 25, "Indore");
const student10 = new Student(10, "Sneha", 23, "Bhopal");

// Printing Student Details
student1.print();
student2.print();
student3.print();
student4.print();
student5.print();
student6.print();
student7.print();
student8.print();
student9.print();
student10.print();