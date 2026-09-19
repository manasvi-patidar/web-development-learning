console.log("Hello World!");
let x = 10;
let y = 5;
console.log("sum is : ", x + y);

//Template Literals
let pencilPrice = 10;
let erasorPrice = 5;
//let output = "The total price is : " + (pencilPrice + erasorPrice) + " Rupees.";
let output = `The total price is : ${pencilPrice + erasorPrice} Rupees.`;
console.log(output);

//Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//Unary Operators
console.log(a++); //10
console.log(++a); //12

//Assignment Operators
let c = 10;
let d = 5;
d = c;
console.log(d);

//Comparison Operators
let age = 18;
console.log(age > 18);

//if statement (Conditional Statements)
let myAge = 14;
if (myAge >= 18) {
    console.log("You can vote");
    console.log("You can drive!")
}
if (myAge < 18) {
    console.log("You cannot vote");
    console.log("You cannot drive!")
}
let firstName = "Manasvi";
if (firstName == "Manasvi") {
    console.log(`Welcome ${firstName}`);
}

//Practice Qn: Create a traffic light system that shows what to do based on color.
let color = "red";

if (color === "red") {
    console.log("Stop!");
}
if (color === "yellow") {
    console.log("Wait");
}
if (color === "green") {
    console.log("Go");
}

//else if Statement
let marks = 89;

if (marks >= 80) {
    console.log("Outstanding");
} else if (marks >= 60) {
    console.log("Good");
} else if (marks >= 45) {
    console.log("Average");
} else if (marks >= 33) {
    console.log("Need Improvement");
} else if (marks < 33) {
    console.log("Fail");
}

//else statement
let Age = 17;
if (age >= 18) {
    console.log("you can vote!");
} else {
    console.log("You can't vote!");
}

//Practice Qn: Calculate popcorn prices
let size = "L";

if(size === "XL") {
    console.log("price is Rs. 250");
} else if(size === "L") {
    console.log("price is Rs.200");
} else if(size === "M") {
    console.log("price is Rs. 100");
} else {
    console.log("price is Rs. 50");
}

//nested if-else statement
let myMarks = 45;

if(myMarks >= 33) {
    console.log("Pass");
    if(marks >= 80) {
        console.log("Grade : Outstanding");
    } else {
        console.log("Grade : Good");
    }
} else {
    console.log("Better luck next time!")
}

//Logical Operators
let markss = 85;

if (markss >= 33 && markss >= 80) {
    console.log("you passed");
    console.log("your grade is A+");
}

//Practice Qn: good string or not.
let str = "apple";

if ((str[0] === 'a') && (str.length > 3)) {
    console.log("good string");
} else {
    console.log("not a good string");
}

//Practice Qn: safe or not.
let num = 12;

if((num % 3 === 0) && ((num + 1 === 15) || (num - 1 === 11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}

//truthy and falsy:
let string = "";

if (string) {
    console.log("string is not empty");
} else {
    console.log("string is empty");
}

let number = 0;

if(number) {
    console.log("num is not equal to zero");
} else {
    console.log("number is equal to zero");
}

//switch statement
let colour = "blue";

switch (colour) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Light is broken!");
}

//Practice Qn: Print days of the week.
let day = 7;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday, fun day");
        break;  
    default:
        console.log("wrong day!");                   
}
