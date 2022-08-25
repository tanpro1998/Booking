import express from "express";
import {
  availableBooking,
  createBooking,
  deleteBooking,
  existingBooking,
  getAllBookings,
} from "../controllers/bookingController.js";
const bookingRouter = express.Router();

bookingRouter.get("/", getAllBookings);

bookingRouter.post("/", existingBooking);

bookingRouter.post("/create", createBooking);

bookingRouter.post("/delete", deleteBooking);

bookingRouter.post("/available", availableBooking);

export default bookingRouter;
