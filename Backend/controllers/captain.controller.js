const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");


module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(401).json({ error: errors.array() });
    }

    console.log(req.body);

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: "Captain already registered." });
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();

    res.status(200).json({ token, captain });
};

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({ message: "Error before login", error: errors.array() });
    }
    // extract value from req -> body
    const {email, password} = req.body;
    // used email to find the token;
    const findCaptain = await captainModel
        .findOne({ email })
        .select("+password");

    if (!findCaptain) {
        return res.status(401).json({ message: "Invalid email, password" });
    }

    const isMatchPassword = await findCaptain.comparePassword(password);

    if (!isMatchPassword) {
        return res.status(401).json({ message: "Invalid email, password" });
    }

    // generate token:
    const token = findCaptain.generateAuthToken();

    res.cookie("token", token);
    res.status(200).json({ token, captain: findCaptain });
};

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain: req.captain });
};

module.exports.captainLogout = async (req, res, next) => {
    // clear cookies;

    const token = req.cookies.token || req.header.authorization?.split(" ")[1];

    await blacklistTokenModel.create({ token });
    res.clearCookie("token");
    res.status(200).json({ message: "captain Logout" });
};
