import express from "express";
const roomRouter = express.Router();
import Room from "../models/roomModel.js";

roomRouter.post("/create", async (req, res) => {
  const newRoom = new Room(req.body);
  try {
    const room = await newRoom.save();
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json(error);
  }
});

roomRouter.get("/", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json(error);
  }
});

roomRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const url = id;
  try {
    const room = await Room.findOne({ url });
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default roomRouter;
