//async keyword
/*async function greet() {
    //throw "weak connection";  //error
    return "hello World!";  //returns a promise
}

greet()
   .then((result) => {
    console.log("promise was resolved");
    console.log("result was : ", result);
   })
   .catch((err) => {
    console.log("promise was rejected with err : ", err);
   });

let demo = async () => {   //writedemo()
    return 5;
};*/

//await Keyword
/*function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}*/

//use of await keyword in above changeColor function:
/*h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}

async function demo() {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("crimson", 1000);
    await changeColor("blue", 1000);
}*/

//Handling Rejections (hint: use try and catch)
h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("promise rejected")
            }

            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("crimson", 1000);
        await changeColor("blue", 1000);
    } catch (err) {
        console.log("error caught");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number = ", a + 3);
}

