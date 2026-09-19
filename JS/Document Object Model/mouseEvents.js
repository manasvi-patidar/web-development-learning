let btn = document.querySelector("button");

//single click
btn.addEventListener("click", function(event) {
    console.log(event);
    console.log("button clicked");
});

//double click
btn.addEventListener("dblclick", function(event) {
    console.log(event);
    console.log("button double clicked");
});
