import { StatusCodes } from "http-status-codes";
import { UserRepository } from "../repositories/index.js";
import AppError from "../utils/errors/app-errors.js";

const userRepository = new UserRepository();

async function signup(data) {
    try {
        let user = await userRepository.getUserByEmail(data.email);

        if (user) {
            throw new AppError("Email is already in use try another Email", StatusCodes.BAD_REQUEST);
        }

        user = await userRepository.create(data);

        return user;
    } catch (error) {
        if (error instanceof AppError) throw error;

        throw new AppError("Cannot create the Account", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export default {
    signup
};