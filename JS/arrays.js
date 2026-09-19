let students = ["abhishek", "manasvi", "shradha"];
console.log(students[1]);

let nums = [2, 4, 6, 8];
console.log(nums.length);
console.log(nums[2]);

//mixed array
let info = ["Manasvi", 21, 5.4];
console.log(info[2]);
console.log(info[0][1]);
console.log(info[0].length);

//empty array
let empArr = [];
console.log(empArr);

//Arrays are Mutable
let fruits = ["apple", "mango", "grapes"];
fruits[1] = "banana"
console.log(fruits);
fruits[3] = "watermelon"
console.log(fruits);

//Array Methods
let cars = ["audi", "bmw", "xuv", "maruti"];
console.log(cars);
cars.push("toyota");
cars.push("ferrari");
console.log(cars);
cars.pop();
console.log(cars);
cars.unshift("ferrari");
console.log(cars);
cars.shift();
console.log(cars);

//indexOf
console.log(cars.indexOf("bmw"));
console.log(cars.indexOf("xuv"));
console.log(cars.indexOf("Xuv"));

//Includes
console.log(cars.includes("audi"));
console.log(cars.includes("ferrari"));

//Sort in Arrays
console.log(cars.sort());

let followers = ["a", "b", "c", "d"];
let blocked = followers.shift();
console.log(followers);
console.log(blocked);

//Practice Qn:
let months = ["january", "july", "march", "august"];
console.log(months);
months.shift();
console.log(months);
months.shift();
console.log(months);
months.unshift("june");
console.log(months);
months.unshift("july");
console.log(months);

//Concatenation and Reverse
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "voilet"];
console.log(primary.concat(secondary));
primary.reverse();
console.log(primary);

//Slice in Arrays
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2, 3));
console.log(colors.slice(-2));

//Splice in Arrays
let colours = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colours);
console.log(colours.splice(4));
console.log(colours);
console.log(colours.splice(0, 1));
console.log(colours);
console.log(colours.splice(0, 1, "black", "grey"));
console.log(colours);
colours.splice(1, 0, "brown");
console.log(colours);

//Nested Arrays
let numbers =  [ [2, 4], [3, 6], [4, 8] ];
console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers[0].length);
console.log(numbers[0][1]);
console.log(numbers[1][1]);
console.log(numbers[1][2]);

//Practice Qn: tic-tac-toe game state
let game = [ ['X', null, 'O'], [null, 'X', null], ['O', null, 'X'] ];
console.log(game);
game[0][1] = 'O';
console.log(game);

