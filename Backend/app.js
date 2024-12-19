const express = require("express")

const app = express();

const dotenv = require("dotenv");

dotenv.config();

const cors = require("cors");

const conntionToDB = require("./db/db");
const userRoutes = require("./routes/user.route");
conntionToDB();

app.use(cors()); // define req port when product level. on cors();
app.use(express.json())
app.use(express.urlencoded({extended: true}));


// get app
app.get("/", (req, res)=>{
    res.send("hello world");
})

app.use('/users', userRoutes);

module.exports = app;