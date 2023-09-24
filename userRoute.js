const express = require("express");
const { signup, signIn } = require("../Controller/userControl");
const userRouter = express.Router();

userRouter.post("/signup", signup
)

userRouter.post("/signIn", signIn)

module.exports = userRouter;