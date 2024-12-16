const express = require("express")

const app = express();

const dotenv = require("dotenv");

dotenv.config();

const cors = require("cors");

app.use(cors()); // define req port when product level. on cors();

// get app
app.get("/", (req, res)=>{
    res.send("hello world");
})

module.exports = app;