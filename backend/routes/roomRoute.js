import express from "express";
import {
  createRoom,
  getAllRooms,
  getRoomById,
} from "../controllers/roomController.js";
const roomRouter = express.Router();

roomRouter.post("/create", createRoom);

roomRouter.get("/", getAllRooms);

roomRouter.get("/:id", getRoomById);

export default roomRouter;
