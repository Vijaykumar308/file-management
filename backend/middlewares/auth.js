const jwt = require("jsonwebtoken");


const auth = (req, res, next) => {
    const {token} = req.cookies;

    // if no token, stop here
    if(!token) {
        res.status(403).json({success:false, message:"Please login first"});
        return;
    }

    try{
        const decode = jwt.verify(token, process.env.SECERT_TOKEN_KEY);
        req.user = decode;
    }
    catch(err) {
        console.log(err);
        res.status(401).json({sucess:false, message:"Invalid token"});
        return;
    }

    next();
};

module.exports = auth;