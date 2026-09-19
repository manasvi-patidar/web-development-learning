//break keyword
let i=1;
while(i<=5) {
    if(i == 3) {
        break;
    }
    console.log(i);
    i++;
}

//Loops with Arrays
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
fruits.push("grapes");

/*for(let i=0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
}*/

//backwords
for(let i=fruits.length-1; i>=0; i--) {
    console.log(i, fruits[i]);
}

//Loops with nested Arrays : Example:1
let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder woman", "flash"]
]

for(let i=0; i<heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length); //outer array
    for(let j=0; j<heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`); //inner array
    }
}

//Example:2
let student = [ ["vandan", 95], ["manasvi", 94.4], ["sandhya", 88] ];

for(let i=0; i<student.length; i++) {
    console.log(`info of student #${i+1}`);
    for(let j=0; j<student[i].length; j++) {
        console.log(student[i][j]);
    }
}

//for of loop
let colors = ["pink", "blue", "red", "green", "orange", "purple", "voilet"];

for(color of colors) {
    console.log(color);
}

for(char of "ilovetocode") {
    console.log(char);
}

//nested for-of loop
let heros = [ ["superman", "batman", "wonder woman"], ["spiderman", "ironman", "thor"] ];

for(list of heros) {
    for(hero of list) {
        console.log(hero);
    }
}
