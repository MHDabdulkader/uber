const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
    firstname, 
    lastname,
    email,
    password,
    
    color,
    plate,
    capacity,
    vehicleType,
    

}) =>{

    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error("Please fill up all required information for registration")
    }

    const captain = captainModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email, 
        password,
        //status,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType,
        },
        // location:{
        //     lat,
        //     lng,
        // }
    })

    return captain;
}