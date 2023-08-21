import { StatusCodes } from "http-status-codes";
import { ErrorResponse } from "../utils/common/index.js";
import AppError from "../utils/errors/app-errors.js";

function validateSignupRequest(req, res, next) {
    const { name, email, password } = req.body;

    if (name === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["Name is missing in the incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (email === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["Email is missing in the incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (password === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["Password is missing in the incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

export default {
    validateSignupRequest
}