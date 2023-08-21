import mongoose from "mongoose";


const restaurantSchema = mongoose.Schema({}, { strict: false });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;