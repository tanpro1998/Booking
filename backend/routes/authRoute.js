import express from "express";
import {
  getAllUsers,
  login,
  refresh,
  register,
} from "../controllers/authController.js";
const authRouter = express.Router();

authRouter.get("/", getAllUsers);

authRouter.post("/register", register);

authRouter.post("/login", login);

authRouter.post("/refresh", refresh);

export default authRouter;
