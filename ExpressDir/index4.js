const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log('app is listening on port ${port}');
});

//Query Strings

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q) {
        res.send("oops! nothing searched");  //type in hoppscotch:-  http://localhost:8080/search?="apple"
    }
    res.send(`search results for query: ${q}`);  //type in hoppscotch:-  http://localhost:8080/search?q="apple"
});

//type in cmd prompt:
//cd "C:\Users\dell\Web Development\ExpressDir"
//node index4.js

