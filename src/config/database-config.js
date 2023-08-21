import mongoose from "mongoose";
import { ServerConfig } from "./index.js";


async function connectToMongoDB() {
    try {
        await mongoose.connect(ServerConfig.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default {
    connectToMongoDB
};