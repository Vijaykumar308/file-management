const mongoose = require("mongoose");

const UserModel = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: [true, "This username is already used"]
        },
        fullname: {
            type: String,
            required: [true, "Fullname is required"]
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        email: {
            type: String,
            required: [true, "Email is required"]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserModel);