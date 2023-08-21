import express from "express";
import { RestaurantController } from "../../controllers/index.js";

const router = express.Router();


router.get(
    "/",
    RestaurantController.getRestaurantList
);

router.get(
    "/details/:restaurantId",
    RestaurantController.getRestaurantDetailsById
);

router.post(
    "/",
    RestaurantController.createRestaurant
);

router.post(
    "/details",
    RestaurantController.createRestaurantDetails
);


export default router;