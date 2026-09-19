//this keyword
const student = {
    name: "manasvi",
    age: 23,
    math: 95,
    phy: 93,
    chem: 97,
    getAvg() {
        console.log(this); //'this' refers to student object here
        let avg = (this.math + this.phy + this.chem) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

//try and catch
console.log("hello");
console.log("hello");
//let a = 5;
try {
    console.log(a);
} catch(err) {
    console.log("caught an error...a is not defined");
    console.log(err);
}
console.log("hello2");
console.log("hello2");

//Arrow Function : Ex-1
const sum = (a, b) => {
    console.log(a + b);
}

//Ex-2
const cube = (n) => {  //in case of single argument, () can be removed!
    return n * n * n;
}

//Ex-3
const pow = (a, b) => {
    return a ** b;
}

//Ex-4
const hello = ()=> { //Even if an arrow function has no argument, () needs to be applied!
    console.log("hello world");
}

//Implicit Return in Arrow Functions
const mul = (a, b) => (a * b);

//Set Timeout Function
setTimeout(() => {
    console.log("Apna College");
}, 4000);  //callback function will be executed after 4000ms(4s)

//Set Interval Function
let id = setInterval(() => {
    console.log("Hello People");
}, 2000);

console.log(id);  //clearInterval(id); //to stop the setInterval function in console

//'this' keyword in Arrow Functions
const student2 = {
    name: "vandan",
    marks: 95,
    prop: this, //global scope
    getName: function () {      //normal function
        console.log(this);
        return this.name;
    },
    getMarks: () => {      //arrow function      
        console.log(this);  //parent's scope -> window
        return this.marks;
    }
};

//Write an arrow function that returns the square of a number 'n'
const square = (n) => (n * n);
console.log(square(4));

//Write a function that prints "Hello Worlddddd" 5 times at intervals of 2s each.
let id2 = setInterval(() => {
    console.log("Hello Worlddddd");
}, 2000);

setTimeout(() => {
    clearInterval(id2);
    console.log("clear interval ran!")
}, 10000);
