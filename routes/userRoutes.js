import express from "express";
const userRoutes = express.Router();
import UserController from "../controllers/userController.js";

userRoutes.post("/register", UserController.userRegistration);

export default userRoutes;
