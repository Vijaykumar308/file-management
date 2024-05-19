const mongoose = require("mongoose");

const connectDB = async(URL) => {
    try {
        await mongoose.connect(URL);
        console.log("Db connected");
    }
    catch(err) {
        console.log('db not connected');
    }
}

module.exports = connectDB;