const User = require("../models/UserModel"); 
const bcrypt = require("bcryptjs");
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
        res.status(400);
        res.json("Username already exit.");
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

const loginUser = (req, res) => {
    res.status(200);
    res.json("Ready to login");
}

module.exports = {registerUser, loginUser};