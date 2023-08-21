import CrudRepository from "./crud-repository.js";
import { RestaurantDetails } from "../models/index.js";

class RestaurantDetailsRepository extends CrudRepository {
    constructor() {
        super(RestaurantDetails);
    }

    async getRestaurantDetailsById(restaurantId) {
        const restaurantDetails = await this.model.findOne({ restaurantId });
        return restaurantDetails;
    }
}

export default RestaurantDetailsRepository;