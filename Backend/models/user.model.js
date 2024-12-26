

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
            minlength: [3, "First name at least 3 characters"]
        },
        lastname: {
            type: String,
            minlength:[3,"Last name at least 3 characters"]
        }
    },
    email:{
        type: String,
        required: true,
        unique:true,
        minlength: [5, "Email length too short"]
    },
    password:{
        type: String,
        required: true,
        minlength:[6,"Last name at least 3 characters"],
        select: false // when finding user this password field is not passing.
    },
    // for track the driver location by cab booker.
    socketId:{
        type: String,
    }
})


userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: "24h"});
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password, 10);
}


// model
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;