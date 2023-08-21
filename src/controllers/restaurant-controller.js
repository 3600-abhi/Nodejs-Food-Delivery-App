import { StatusCodes } from "http-status-codes";
import { RestaurantService } from "../services/index.js";
import { SuccessResponse, ErrorResponse } from "../utils/common/index.js";

async function createRestaurant(req, res) {
    try {
        const restaurant = await RestaurantService.createRestaurant(req.body);

        SuccessResponse.message = "Successfully created the Restaurant";
        SuccessResponse.data = restaurant;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);

        ErrorResponse.message = "Something went wrong while creating Restaurant";
        ErrorResponse.error = error; // this error object is (AppError) object

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function createRestaurantDetails(req, res) {
    try {

        const restaurantDetails = await RestaurantService.createRestaurantDetails(req.body);

        SuccessResponse.message = "Successfully created the Restaurant details";
        SuccessResponse.data = restaurantDetails;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);

        ErrorResponse.message = "Something went wrong while creating Restaurant details";
        ErrorResponse.error = error; // this error object is (AppError) object

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getRestaurantList(req, res) {
    try {
        const restaurantList = await RestaurantService.getRestaurantList();

        SuccessResponse.message = "Successfully created the Restaurant List";
        SuccessResponse.data = restaurantList;

        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);

        ErrorResponse.message = "Something went wrong while fetch Restaurant List";
        ErrorResponse.error = error;

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getRestaurantDetailsById(req, res) {
    try {
        const restaurantDetails = await RestaurantService.getRestaurantDetailsById(req.params.restaurantId);

        SuccessResponse.message = "Successfully fetched the Restaurant details";
        SuccessResponse.data = restaurantDetails;

        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);

        ErrorResponse.message = "Something went wrong while fetch Restaurant details";
        ErrorResponse.error = error;

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

export default {
    createRestaurant,
    createRestaurantDetails,
    getRestaurantList,
    getRestaurantDetailsById
}