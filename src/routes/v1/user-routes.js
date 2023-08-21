import express from "express";
import { UserMiddleware } from "../../middlewares/index.js";
import { UserController } from "../../controllers/index.js";

const router = express.Router();

router.post(
    "/signup",
    UserMiddleware.validateSignupRequest,
    UserController.signup
);


export default router;