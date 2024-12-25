const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userAuth = async (req, res, next) => {
    console.log(req.cookies.token)
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorization" });
    }

    const isBlackListed = await userModel.findOne({token: token});
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