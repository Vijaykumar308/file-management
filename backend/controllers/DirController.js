const User = require("../models/UserModel"); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Directory = require("../models/directoriesModal")


const createDirectory =  async (req, res) => {
    const {dirObj} = req.body;

    if(!(dirObj.dirName )) {
        res.status(400);
        res.json("invalid dir name");
        return;
    }


    const dirCreated = await Directory.create({
        dirName : dirObj.dirName,
        user_id : dirObj.userId,
        type: dirObj.type
    });

    
    res.status(200);
    res.json(dirCreated);
}

const fetchDirectories = async (req, res) => {
    const {user_id, parent_directory_id} = req.body; 
    const dir = await Directory.find({user_id:user_id, parent_directory_id:parent_directory_id});
    console.log(dir);
    res.status(200).json(dir);
}


module.exports = {createDirectory, fetchDirectories};