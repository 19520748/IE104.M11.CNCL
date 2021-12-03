const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 6,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    birth: {
        type: String,
        required: true,
        unique:false
    },
    address: {
        type: String,
        required: true,
        unique:false
    },
    favoredfood: {
        type: String,
        required: true,
        unique:false,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    }
    , profilePic: {
        type: String,
        default: "defaultAva.png",
    },


}, { timestamps: true }
);

module.exports=mongoose.model("User",UserSchema);