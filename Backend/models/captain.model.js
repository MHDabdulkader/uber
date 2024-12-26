const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required: true,
            minLength : [3, "First name atleast 3 character"],
        },
        lastname:{
            type: String,
            minLength : [3, "First name atleast 3 character"],
        }
    },
    email:{
        type: String, 
        required: true,
        unique: true,
        lowercase:true,
        match:[/^\S+@\S+\.\S+$/, "Please enter valid email address"]
    },

    password:{
        type: String,
        required: true,
        minlength:[6,"Last name at least 3 characters"],
        select: false // when finding user this password field is not passing.
    },
    socketId:{
        type: String,
    },

    status: {
        type: String,
        enum: ['active', 'in-active'],
        default: "in-active",
    },
    
    vehicle:{
        color: {
            type: String,
            required: true,
            minLength: [3, "Color must be at least 3 characters"],
        },
        plate:{
            type: String,
            required: true,
            minLength: [3, "plate number must be at least 3 character"],
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, "Capacity at least 1"],
        },
        vehicleType:{
            type: String,
            required: true,
            enum:["car", "motorcycle", "auto", "rickshaw"]
        }
    },
    location:{
        lat:{
            type: Number,
        },
        lng:{
            type: Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: "24h"});
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model("captainModel", captainSchema);
module.exports = captainModel;