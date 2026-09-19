//forEach : Ex-1
let arr1 = [1, 2, 3, 4, 5];

let print = function (el) {
    console.log(el);
};
arr1.forEach(print);

//forEach : Ex-2
let arr2 = [6, 7, 8, 9, 10];

arr2.forEach(function (el) {
    console.log(el);
});

//forEach : Ex-3
let arr3 = [
    {
        name: "vandan",
        marks: 97,
    },
    {
        name: "manasvi",
        marks: 95.5,
    },
    {
        name: "sandhya",
        marks: 92,
    },
];

arr3.forEach((student) => {
    console.log(student.marks);
});

//Map : Ex-1
let num = [1, 2, 3, 4];

let double = num.map((el) => {  //write double in console
    return el * 2;
});

//Map : Ex-2
let students = [
    {
        name: "vandan",
        marks: 97,
    },
    {
        name: "manasvi",
        marks: 95.5,
    },
    {
        name: "sandhya",
        marks: 92,
    },
];

let gpa = students.map((el) => {
    return el.marks/10;
});

//Filter
let nums = [1, 2, 3, 4, 7, 9, 6, 8, 5, 13, 15, 10, 14, 12, 11];
let ans = nums.filter((el) => {
    return el % 2 == 0;  //even -> true, odd -> false
});

//Every
[1, 2, 3, 4].every( (el) => (el % 2 == 0)); //false
[2, 4].every( (el) => (el % 2 == 0)); //true

//Reduce : way-1...prints all the values
let numbers = [1, 2, 3, 4, 5];
let finalVal = numbers.reduce( (res, el) => res + el );
console.log(finalVal); //15

//Reduce : way-2...prints final value only
let numbers2 = [1, 2, 3, 4];
let finalVal2 = numbers2.reduce((res, el) => {
    console.log(res);
    return res + el;
});
console.log(finalVal2); //10

//Finding Maximum in an array using reduce.
let arr = [1, 4, 2, 5, 6, 7, 9, 8, 3];

let max = arr.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});

console.log(max);
