const User = require("../models/UserModel"); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
/**
 * 
 *  
*/
const registerUser =  async (req, res) => {
    const {username, fullname, email, password,} = req.body;

    if(!(username && fullname && email && password)) {
        res.status(400);
        res.json("All fields are mandatory");
        return;
    }

    // User name validation;
    const isUserExist = await User.findOne({username});

    console.log(isUserExist);
    if(isUserExist) {
        res.status(409);
        res.json({status:409, message:"Username already exit."});
        return;
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const userCreated = await User.create({
        username,
        email,
        fullname,
        password: hashPassword
    });

    userCreated.password = undefined;
    
    res.status(200);
    res.json(userCreated);
}

/**
 * 
 * 
*/

const loginUser = async (req, res) => {
    const {username, password} = req.body;

    if(!(username && password)) {
        res.status(400);
        res.json("All fields are mandatory");
        return;
    }

    // User name validation;
    const userExist = await User.findOne({username});
    console.log(userExist);
    if(!userExist) {
        res.status(400);
        res.json({status:400, message:"Invalid username"});
        return;
    }

    if(userExist && (await bcrypt.compare(password, userExist.password))) {
        const token = jwt.sign(
            {
                id:User._id,
                username,
                email: userExist.email
            },
            process.env.SECERT_TOKEN_KEY,
            {
                expiresIn:process.env.TOKEN_EXPIRY_TIME
            }
        );
        userExist.password = undefined;
        res.status(201).json({username:userExist.username, email:userExist.email, token});
    }
    else {
        res.status(200);
        res.json("Invalid credentials");
    }

    // res.status(200);
    // res.json("Ready to login");
}

module.exports = {registerUser, loginUser};