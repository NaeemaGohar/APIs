const jwt = require("jsonwebtoken");
const secretKey = "API"

const auth = (req, res, next)=>{
    try {
        let token = req.headers.authorization;
        if(token){
            token = token.split("")[1];
            let user = jwt.verify(token, secretKey);
            req.userID = user.id;
        }
        else{
            res.status(402).json({messaeg:"Unauthorized User"});
        }
        next();

    } catch (error) {
        console.log(error);
        res.status(402).json({messaeg:"Unauthorized User"});
    }
}

module.exports = auth;