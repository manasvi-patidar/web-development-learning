//declaring a function
function hello() {
    console.log("hello");
}

function printName() {
    console.log("Manasvi Patidar");
    console.log("Software Engineer");
}

function print1to5() {
    for(let i=1; i<=5; i++) {
        console.log(i);
    }
}

function isAdult() {
    let age = 18;
    if(age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }
}

//printing a poem
function printPoem() {
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder what you are");
}

//rolling a dice
function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

//Function with Arguments
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}

//print sum
function sum(a, b) {
    console.log(a + b);
}

//calculate average
function calcAvg(a, b, c) {
    let avg = (a + b + c)/3;
    console.log(avg);
}

//print table
function printTable(n) {
    for(let i=n; i<=n*10; i+=n) {
        console.log(i);
    }
}

//Return Keyword
function divide(a, b) {
    return a/b;
}
let d = divide(12, 4);
console.log(d);

//Practice Qs 5
function getSum(n) {
    let sum = 0;

    for(let i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}

//Practice Qs 6
let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result = "";

    for(let i=0; i<str.length; i++) {
        result += str[i];
    }

    return result;
}

//Function expressions
let multiple = function(a, b) { //nameless function
    return a*b;
}

//Higher Order Function
function multipleGreet(func, count) { //takes one or multiple functions as arguments
    for(let i=1; i<=count; i++) {
        func();
    }
}
let greet = function() {
    console.log("hello jii, kaise ho!");
}
multipleGreet(greet, 3);

//Higher Order Function
function oddOrEvenFactory(request) { //returns a function
    if(request == "odd") { 
        return function(n) {
        console.log(!(n%2 == 0));
        }
    } else if(request == "even") {
        return function(n) {
        console.log(n%2 == 0);
        }
    } else {
        console.log("wrong request!");
    }
}
let request = "odd"; 

//Methods
const calculator = {
    add: function(a, b) {
        return a+b;
    },
    sub: function(a, b) {
        return a-b;
    },
    mul: function(a, b) {
        return a*b;
    }
};

//Methods(Shorthand)
const calculator2 = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
};

//calling a function
hello();
printName();
print1to5();
isAdult();
printPoem();
rollDice();
printInfo("Manasvi", 21);
printInfo("Vandan");
sum(4, 6);
calcAvg(2, 4, 6);
printTable(6);
getSum(4);
concat(str);

