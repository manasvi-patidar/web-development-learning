const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

/*app.use((req, res, next) => {
    console.log("Hi, I am 1st middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Hi, I am 2nd middleware");
    next();
});*/

//Logger
/*app.use((req, res, next) => {
    req.time = Date.now()
    console.log(req.method, req.hostname, req.path, req.time);
    next();
});*/

app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {  //localhost:8080/api?token=giveaccess
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED!");  //localhost:8080/api
});

//API token as Query String
app.get("/api", (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

app.get("/err", (req, res) => {
    abcd = abcd;  //error
});

//Activity
app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is Forbidden");
});

//Express Error Handler
app.use((err, req, res, next) => {
    let {status = 500, message = "Some error occured"} = err;  //500, some error occured -> default values
    res.status(status).send(message);
});

//404
app.use((req, res) => {
    res.send("Page not found!");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});
