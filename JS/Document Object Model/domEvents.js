/*let btns = document.querySelectorAll("button");

for(btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log("you entered a button");
    };
    console.dir(btn);
}

function sayHello() {
    alert("Hello!");
}*/

//Event Listeners
let btns = document.querySelectorAll("button");

for(btn of btns) {
    //btn.addEventListener("click", sayHello);
    //btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function () {
        console.log("you double clicked me");
    });
}

function sayHello() {
    alert("Hello");
}

function sayName() {
    alert("Apna College");
}
