//a function can call another function:
/*function hello() {
    console.log("inside hello function");
    console.log("hello");
}

function demo() {
    console.log("calling hello function");
    hello();
}

console.log("calling demo function");
demo();
console.log("done, bye!");*/

//Visualizing the Call Stack:
/*function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();*/

//JS is Single Threaded:

//synchronous nature(line by line code execution)
/*let a = 20;
console.log(a);
let b = 10;
console.log(b);
console.log(a + b);*/

//asynchronous nature
/*setTimeout(() => {
    console.log("apna college");
}, 2000);
setTimeout(() => {
    console.log("web dev");
}, 2000);

console.log("heyaa...");*/

//Problems in JS due to asynchronous nature:

//CallBack Hell -> callback nesting
/*h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("purple", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("brown", 1000, () => {
                changeColor("blue", 1000);
            });
        });
    });
});*/

//Example of Callback Hell

/*function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}
savetoDb(
    "Russia launched fresh drone attacks on Ukraine after a short ceasefire ended.",
    () => {
        console.log("success : your data was saved");
        savetoDb(
            "Kalpana Chawla died",
            () => {
                console.log("success2: data2 was saved");
                savetoDb(
                    "Apple is red",
                    () => {
                        console.log("success3: data3 was saved");
                    },
                    () => {
                        console.log("failure : weak connection");
                    }
                );
            },
            () => {
                console.log("failure2 : weak connection");
            }
        );
    },
    () => {
        console.log("faliure : weak connection. data not saved");
    }
);*/

//Promises

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
}

//then() & catch() mathods: way-1
/*let request = savetoDb("Russia launched fresh drone attacks on Ukraine after a short ceasefire ended.");  //req = promise object
request
    .then(() => {
      console.log("promise was resolved");
      console.log(request);
    })
    .catch(() => {
      console.log("promise was rejected");
      console.log(request);
    });*/

//way-2
/*savetoDb("Russia launched fresh drone attacks on Ukraine after a short ceasefire ended")
    .then(() => {
        console.log("promise was resolved");
    })
    .catch(() => {
        console.log("promise was rejected");
    });*/

//Promise Chaining: way-1
/*savetoDb("Russia launched fresh drone attacks on Ukraine after a short ceasefire ended")
    .then(() => {
        console.log("data1 saved");
        savetoDb("hello world!")
        .then(() => {
            console.log("data2 saved");
        });
    })
    .catch(() => {
        console.log("promise was rejected");
    });*/

//way-2(improved version)
/*savetoDb("Russia launched fresh drone attacks on Ukraine after a short ceasefire ended")
    .then(() => {
        console.log("data1 saved");
        return savetoDb("hello world");
    })
    .then(() => {
        console.log("data2 saved");
        return savetoDb("Manasvi here");
    })
    .then(() => {
        console.log("data3 saved");
    })
    .catch(() => {
        console.log("promise was rejected");
    });*/

//Results and Errors in Promises
/*savetoDb("Russia launched fresh drone attacks on Ukraine after a short ceasefire ended")
    .then((result) => {
        console.log("data1 saved");
        console.log("result of promise : ", result);
        return savetoDb("hello world");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log("result of promise : ", result);
        return savetoDb("Manasvi here");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("result of promise : ", result);
        return savetoDb("okay bye!");
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log("error of promise : ", error);
    });*/

    //Refactoring old code

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

changeColor("deeppink",1000)
.then(() => {
    console.log("deeppink color was completed");
    return changeColor("crimson", 1000);
})
.then(() => {
    console.log("crimson color was completed");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange color was completed");
    return changeColor("limegreen", 1000);
})
.then(() => {
    console.log("limegreen color was completed");
    return changeColor("deepskyblue", 1000);
})
.then(() => {
    console.log("deepskyblue color was completed");
})
