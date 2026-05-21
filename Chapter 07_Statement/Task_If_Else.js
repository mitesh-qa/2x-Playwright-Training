// Task 01

let number = 7;

if (number % 2 === 0)
{
    console.log("Number is odd");
}
else
{
    console.log("Number is even");
}

// Task 02

score = 50;

if(score >=90){
    console.log("Your grade is A")
}
if(score >=80){
    console.log("Your grade is B")
}
if(score >=70){
    console.log("Your grade is C")
}
if(score >=60){
    console.log("Your grade is D")
}
else {
    console.log("You are FAIL")
}

// Task 03

let year = 2025;

if((year % 4 === 0) && (year !== 100) || (year % 400 === 0)) {
    console.log(+year, "is a Leap year")
}
else {
   console.log(+year, "is not a Leap year") 
}