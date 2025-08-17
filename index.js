const express = require("express");
const {scheduler} = require("./schedular")

const app = express();
app.use(express.json());


app.listen(5000, () => {
    console.log("The server started on 5000 port");
});
