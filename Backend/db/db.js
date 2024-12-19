const mongoose = require("mongoose");

function conntionToDB() {
    mongoose
        .connect(process.env.DB_CONNECT)
        .then(() => {
            console.log("Database connected:");
        })
        .catch((error) => console.log(error));
}

module.exports = conntionToDB;
