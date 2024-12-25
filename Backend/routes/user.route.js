const express = require("express");

const router = express.Router();
const {body} = require("express-validator");

const userController = require("../controllers/user.controller")

const authMiddleware = require("../middlewares/auth.middleware");

router.post("/register",[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name at least 3 character"),
    body('password').isLength({min:6}).withMessage("password at least 6 characters"),
],
    userController.registerUser
)

router.post("/login", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("password at least 6 characters")
], 
    userController.loginUser
)

router.get("/profile",authMiddleware.userAuth, userController.getUserProfile)

router.get("/logout", authMiddleware.userAuth, userController.logoutUser);

module.exports = router;