//Trim Method
let greet = "heyaa!   ";
console.log(greet.trim());

//LowerCase and UpperCase
let name = "Manasvi";
name.toLowerCase();
name.toUpperCase();

//Method Chaining
let msg = "    Hello    ";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

//Slice
let word = "Hello";
console.log(word.slice(0, 4));
let word2 = "ApnaCollege";
console.log(word2.slice(4));
console.log(word2.slice(-2)); //11 - 2 = 9

//Replace
let text = "ILoveCoding";
console.log(text.replace("Love","Do"));

//Repeat
let fruit = "mango";
console.log(fruit.repeat(2));
