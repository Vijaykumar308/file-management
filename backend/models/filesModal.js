const mongoose = require("mongoose");

const FilesModel = mongoose.Schema(
    {
        fileName: {
            type: String,
            required: [true, "Username is required"],
        },
        dir_id: {
            type: mongoose.Types.ObjectId,
            required: [true, "Fullname is required"]
        },
        type: {
            type: String,
            required: [true, "Fullname is required"]
        },
        content: {
            type: String,
           
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("File", FilesModel);