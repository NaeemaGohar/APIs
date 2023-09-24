const userModel = require("../models/user");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secretKey = "API"

const signup = async(req, res)=>{
// if the user is existing
const {username, password, email}  =req.body;
try {
    const UserExists = await userModel.findOne({email:email})

    if(UserExists){
        return res.status(400).json({message:"User already exists"})
    }

    const hashPwd = await bcrypt.hash(password,10);

    const result = await userModel.create({
        email: email,
        password: hashPwd,
        username: username
    });

    const token = jwt.sign({email: result.email, id: result._id}, secretKey);
    res.status(201).json({user:result, token:token})

} catch (error) {
   console.log(error);
   res.status(500).json({messgae: "Something went wrong"})
}
}

const signIn = async(req, res)=>{
    const {email, password}= req.body;
    try {
        const UserExists = await userModel.findOne({email:email})

    if(!UserExists){
        return res.status(404).json({message:"User not found"})
    }

    const matchPwd = await bcrypt.compare(password, UserExists.password);
    if(!matchPwd){
        return res.status(400).json({message:"Invalid credentials"});

    }

    const token = jwt.sign({email: UserExists.email, id: UserExists._id}, secretKey);
    res.status(201).json({user:UserExists, token:token})

    } catch (error) {
        console.log(error);
   res.status(500).json({message: "Something went wrong"});
    }
    
}

module.exports = {signup, signIn};