import mongoose from "mongoose";


const restaurantDetailsSchema = mongoose.Schema({}, { strict: false });

const RestaurantDetails = mongoose.model("Restaurant_Details", restaurantDetailsSchema);

export default RestaurantDetails;