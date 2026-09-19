let p = document.querySelector("p");

p.addEventListener("click", function() {
    console.log("para was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function() {
    console.log("mouse inside box");
});

//'this' in Event Listeners
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    //console.log(this);
    //console.dir(this);
    console.dir(this.innerText);
    this.style.backgroundColor = "lightgreen";
});

