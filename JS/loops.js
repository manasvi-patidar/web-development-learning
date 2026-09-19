//for loop
for(let i=1; i<=5; i++) {
    console.log(i);
}

for(let i=5; i>=1; i--) {
    console.log(i);
}

//Print all odd numbers(1 to 15)
for(let i=1; i<=15; i=i+2) {
    console.log(i);
}

console.log("backwords");

for(let i=15; i>=1; i=i-2) {
    console.log(i);
}

//Print all even numbers(2 to 10)
for(let i=2; i<=10; i=i+2) {
    console.log(i);
}

console.log("backwords");

for(let i=10; i>=2; i=i-2) {
    console.log(i);
}

//Print the multiplication table for 5
for(let i=5; i<=50; i=i+5) {
    console.log(i);
}

//Print the multiplication table for n
/*let n = prompt("enter your number: ");
n = parseInt(n);

for(let i=n; i<=n*10; i=i+n) {
    console.log(i);
}*/

//nested for loop
for(let i=1; i<=3; i++) {
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++) {
        console.log(j);
    }
}

//while loop
console.log("while loop");

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
