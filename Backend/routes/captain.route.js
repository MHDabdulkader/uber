const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const captainController = require("../controllers/captain.controller")


router.post("/register", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name at least 3 character"),
    body('password').isLength({min:6}).withMessage("password at least 6 characters"),
    body('vehicle.color').isLength({min:3}).withMessage("Vehicle color at least 3 character"),
    body('vehicle.plate').isLength({min:3}).withMessage("Vehicle plate number at least 3 character"),
    body('vehicle.capacity').isInt({min:1}).withMessage("Capacity at least 1"),
    body('vehicle.vehicleType').isIn(["car", "motorcycle", "auto", "rickshaw"]).withMessage("choose your vehicle"),

],
    captainController.registerCaptain
)

module.exports = router;