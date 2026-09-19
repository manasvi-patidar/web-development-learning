let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    /*let inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp);
    console.log(inp.value);*/

    /*let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    console.log("username : ", user.value);
    console.log("password : ", pass.value);
    alert(`Hi ${user.value}, your password is set to ${pass.value}`);*/

    console.dir(form);
    console.dir(form.elements);
    let user = this.elements[0];  //OR form.elements[0]
    let pass = this.elements[1];
    console.log(user.value);
    console.log(pass.value);

});
