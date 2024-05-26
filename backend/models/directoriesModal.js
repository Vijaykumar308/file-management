const mongoose = require("mongoose");

const DirectoriesModel = mongoose.Schema(
    {
        dirName: {
            type: String,
            required: [true, "dir name is required"],
        },
        user_id: {
            type: String,
            required: [true, "user id is required"]
        },
        parent_directory_id: {
            type: String,
            default:"home"
        },
        type: {
            type: String,
            required: [true, "file type is required"]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Directory", DirectoriesModel);