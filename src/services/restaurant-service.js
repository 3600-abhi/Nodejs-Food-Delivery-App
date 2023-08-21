import { StatusCodes } from "http-status-codes";
import { RestaurantRepository, RestaurantDetailsRepository } from "../repositories/index.js";
import AppError from "../utils/errors/app-errors.js";

const restaurantRepository = new RestaurantRepository();
const restaurantDetailsRepository = new RestaurantDetailsRepository();

async function createRestaurant(data) {
    try {
        const restaurant = await restaurantRepository.create(data);
        return restaurant;
    } catch (error) {
        if (error instanceof AppError) throw error;

        throw new AppError("Cannot create the Restaurant", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function createRestaurantDetails(data) {
    try {
        const restaurantDetails = await restaurantDetailsRepository.create(data);
        return restaurantDetails;
    } catch (error) {
        console.log(error);

        if (error instanceof AppError) throw error;

        throw new AppError("Cannot create the Restaurant details", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getRestaurantList() {
    try {
        const restaurantList = await restaurantRepository.getAll();
        return restaurantList;

    } catch (error) {
        console.log(error);

        if (error instanceof AppError) throw error;

        throw new AppError("Cannot fetch the Restaurant List", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getRestaurantDetailsById(restaurantId) {
    try {
        const restaurantDetails = await restaurantDetailsRepository.getRestaurantDetailsById(restaurantId);
        
        return restaurantDetails;

    } catch (error) {
        console.log(error);

        if (error instanceof AppError) throw error;

        throw new AppError("Cannot fetch the Restaurant details", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export default {
    createRestaurant,
    createRestaurantDetails,
    getRestaurantList,
    getRestaurantDetailsById
};