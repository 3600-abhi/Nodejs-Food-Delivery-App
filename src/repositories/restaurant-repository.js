import CrudRepository from "./crud-repository.js";
import { Restaurant } from "../models/index.js";

class RestaurantRepository extends CrudRepository {
    constructor() {
        super(Restaurant);
    }
}

export default RestaurantRepository;