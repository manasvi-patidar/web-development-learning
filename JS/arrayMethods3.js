//Rest : Ex-1
function sum(...args) {
    //arguments
    for(let i=0; i<args.length; i++) {
        console.log("you gave us: ", args[i]);
    }
}
console.log(sum(1, 2, 3, 4));

//Rest : Ex-2
function min() {
    console.log(arguments);
}
console.log(min(1, 2, 3));

//Rest : Ex-3
function mul(...args) {
    return args.reduce((mul, el) => mul * el);
}
console.log(mul(3, 4, 5));

//Destructuring
let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup] = names;
console.log(winner, runnerup);  //"tony" "bruce"

//Destructuring in Objects
const student = {
    name: "vandan",
    class: 10,
    age: 15,
    subjects: ["hindi", "english", "maths", "science", "social studies"],
    username: "vandan123",
    password: 1234,
};

const { username: user, password: pass, city: place = "Indore" } = student;

console.log(user);  //"vandan123"
//console.log(city);  //error: not defined
console.log(place);  //"Indore"
