const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data) {
        res.render("instagram2.ejs", { data });   //localhost:8080/ig/cats or localhost:8080/ig/dogs
    } else {
        res.render("error.ejs");  //localhost:8080/ig/manasvi
    }
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

//cd "C:\Users\dell\Web Development\EJSdir"
//nodemon index2.js
