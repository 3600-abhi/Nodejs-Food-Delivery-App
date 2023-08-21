import { StatusCodes } from "http-status-codes";
import { UserService } from "../services/index.js";
import { SuccessResponse, ErrorResponse } from "../utils/common/index.js";

async function signup(req, res) {
    try {
        const { name, email, password } = req.body;

        const user = await UserService.signup({ name, email, password });

        SuccessResponse.message = "Successfully created the User";
        SuccessResponse.data = user;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong while creating User";
        ErrorResponse.error = error; // this error object is (AppError) object

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

export default {
    signup
}