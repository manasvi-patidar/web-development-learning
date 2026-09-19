let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

let user = document.querySelector("#user");

//change event
user.addEventListener("change", function() {
    console.log("change event");
    console.log("final value = ", this.value);
});

//input event
user.addEventListener("input", function() {  //non-character keys like arrow, shift etc don't trigger the input event
    console.log("input event");
    console.log("final value = ", this.value);
});
