const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");

module.exports.userAuth = async (req, res, next) => {
    console.log(req.cookies.token)
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorization" });
    }

    const isBlackListed = await blacklistTokenModel.findOne({token: token});
    if(isBlackListed){
        return res.status(401).json({message: "Unauthorization"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorization" });
    }
};

module.exports.captainAuth = async (req, res, next)=>{
    // extract token from cookies or header 
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({message: "Unauthorization"});
    }
    //  find in blacklisted token;
    const isBlackListed = await blacklistTokenModel.findOne({token: token});
    if(isBlackListed){
        return res.status(401).json({message: "Unauthorization"});
    }


    try{
        // token bcrypt
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;
        return next();
    }catch(error){
        return res.status(401).json({message: "Unauthorization"});
    }

}
