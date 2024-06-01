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
        res.json({message:"All fields are mandatory"});
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
    // console.log(username, password);
    if(!(username && password)) {
        res.status(400);
        res.json({status: 400, message:"All fields are mandatory"});
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

        // cookie section
        const options = {
            expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
            httpOnly:true,
        };

        res.status(200).cookie("token", token, options).json({
            success:true,
            token,
            username:userExist.username, 
            email:userExist.email
        });
    }
    else {
        res.status(200);
        res.json("Invalid credentials");
    }
}


const homepage = async(req, res) => {
    res.status(200).json("this is the home page");
}

module.exports = {registerUser, loginUser, homepage};