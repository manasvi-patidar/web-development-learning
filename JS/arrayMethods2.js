//Check if all numbers in our array are multiples of 10 or not.

let nums = [10, 20, 30, 40];

let ans = nums.every((el) => el % 10 == 0);

console.log(ans);

//Create a function to find the min number in an array.

let numbers = [4, 6, 2, 8, 3, 5, 7];

function getMin(numbers) {
    let min = numbers.reduce((min, el) => {
    if(min < el) {
        return min;
    } else {
        return el;
    }
    });

    return min;  //2
}

//Default Parameters

function sum(a, b = 3) {
    return a + b;
}
sum(2); //5

//Spread

let arr = [1, 2, 3, 4, 5];

Math.min(...arr);  //1

console.log(...arr);  //1 2 3 4 5

console.log(..."manasvipatidar");  //m a n a s v i p a t i d a r

//Spread with Array Literals : Ex-1

let arr2 = [1, 2, 3, 4, 5];

let newArr = [...arr];  //[1, 2, 3, 4, 5]

//Spread with Array Literals : Ex-2

let chars = [..."hello"];  //['h', 'e', 'l', 'l', 'o']

console.log(chars);

//Spread with Array Literals : Ex-3

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let allNums = [...odd, ...even];
console.log(allNums);

//Spread with Object Literals : Ex-1

let data = {
    email: "ironman@gmail.com",
    password: "abcd",
};
let dataCopy = {...data, id: 123, country: "India"};
console.log(dataCopy);

//Spread with Object Literals : Ex-2

let array = [1, 2, 3, 4, 5];  //val
let obj1 = {...arr};  //obj -> key:val
console.log(obj1);  //index is stored at the place of key if key is not defined

let obj2 = {..."hello"};  
console.log(obj2);  //here also, index becomes key and char becomes value
