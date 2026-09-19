const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log('app is listening on port ${port}');
});

//Routing

app.get("/", (req, res) => {
    res.send("you contacted root path");  //search in browser: localhost:8080
});

app.get("/search", (req, res) => {
    res.send("you contacted search path");  //localhost:8080/search
});

app.get("/help", (req, res) => {
    res.send("you contacted help path");  //localhost:8080/help
});

app.get("/home", (req, res) => {
    res.send("you contacted home path");  //localhost:8080/home
});

app.use((req, res) => {
    res.status(404).send("oops! this page does not exist");  //catches all unmatched routes. For ex:- localhost:8080/settings
});

app.post("/", (req, res) => {
    res.send("you sent a post request to root");
});

//cd "C:\Users\dell\Web Development\ExpressDir"
//node index2.js
