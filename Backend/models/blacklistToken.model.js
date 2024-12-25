const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type: String,
        required: true,
        unique: true
    },
    createAt:{
        type: Date,
        default: Date.now,
        required: true,
        expires: 86400 // 24 h in second
    }
});

module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema)