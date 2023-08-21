import mongoose from "mongoose";
import { ServerConfig } from "../config/index.js";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre("save", function (next) {
    const saltRound = parseInt(ServerConfig.SALT_ROUNDS);

    const encryptedPassword = bcrypt.hashSync(this.password, saltRound);

    this.password = encryptedPassword;

    next();
});

const User = mongoose.model("User", userSchema);

export default User;