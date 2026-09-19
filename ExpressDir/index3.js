const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log('app is listening on port ${port}');
});

//Path Parameters
app.get("/:username/:id", (req, res) => {
    let { username, id} = req.params;
    res.send(`welcome to the page of @${username} with id @${id}.`);  //type in hoppscotch:-  http://localhost:8080/apnacollege/123
});

