let form = document.querySelector("form");

form.addEventListener("submit", function () {
    event.preventDefault();  //if we don't want to go on "/action" url
    alert("form submitted");
});
