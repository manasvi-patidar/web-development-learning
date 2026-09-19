const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log('app is listening on port ${port}');
});

//Ctrl+C -> to stop the server in cmd prompt

app.use((req, res) => {
    console.log("request received");
    res.send({
        name: "Manasvi",
        hobby: "loves to code"
    });
});

