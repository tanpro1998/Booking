import express from "express";
const bookingRouter = express.Router();
import Booking from "../models/bookingModel.js";
import Room from "../models/roomModel.js";
import { deleteExpiredBookings } from "../utils/delExpiredBooking.js";
import { randomID } from "../utils/randomId.js";

bookingRouter.get("/", async (req, res) => {
  try {
    const bookings = await deleteExpiredBookings();
    return res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json(err);
  }
});

bookingRouter.post("/", async (req, res) => {
  try {
    deleteExpiredBookings();
    let existingBooking;
    const { confirmation, email } = req.body;
    if (confirmation.length > 0) {
      existingBooking = await Booking.find({
        confirmation: confirmation.toUpperCase(),
      });
    } else if (existingBooking.length > 0) {
      existingBooking = await Booking.find({ email: email });
    } else {
      return res.status(404).json({ message: error.message });
    }

    if (existingBooking) {
      return res.status(200).json(existingBooking);
    } else {
      return res.status(404).json({ message: error.message });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create Booking

bookingRouter.post("/create", async (req, res) => {
  try {
    const data = await req.body;

    const {
      firstName,
      lastName,
      email,
      phone,
      adults,
      children,
      dates,
      title,
      totalPrice,
      paymentType,
      cardNum,
    } = data;
    // create a booking ID
    let newId = randomID(6);
    const idArr = [];
    const allUsers = await Booking.find();
    allUsers.forEach((inf) => {
      idArr.push(inf.confirmation);
    });
    while (idArr.includes(newId)) {
      newId = randomID(6);
    }

    const result = await Booking.create({
      firstName,
      lastName,
      email,
      phone,
      adults,
      children,
      startDate: dates[0],
      endDate: dates[1],
      room: title,
      price: totalPrice,
      cardType: paymentType,
      cardNum,
      confirmation: newId,
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Booking
bookingRouter.post("/delete", async (req, res) => {
  const { id } = req.body;
  try {
    const result = await Booking.findOneAndDelete({ confirmation: id });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

bookingRouter.post("/available", async (req, res) => {
  const data = req.body;
  try {
    const roomData = await Room.find({
      $and: [
        { adults: { $gte: data.adults } },
        { children: { $gte: data.children } },
      ],
    });
    let available = roomData.map((el) => ({
      ...el.toObject(),
    }));
    let roomTitles = [];
    for (let room of available) {
      roomTitles.push(room.title);
    }

    const existingBookings = await Booking.find({
      room: { $in: [...roomTitles] },
    });
    const startDate = new Date(data.dates[0]);
    const endDate = new Date(data.dates[1]);

    for (let booking of existingBookings) {
      let existingStartDate = new Date(booking.startDate).getTime();
      let existingEndDate = new Date(booking.endDate).getTime();
      // check for date collision
      if (
        (existingStartDate >= startDate.getTime() &&
          existingStartDate <= endDate.getTime()) ||
        (existingEndDate >= startDate.getTime() &&
          existingEndDate <= endDate.getTime())
      ) {
        for (let room of available) {
          if (room.title === booking.room) {
            room.hasError = {
              room: booking.room,
              dates: [booking.startDate, booking.endDate],
            };
          }
        }
      }
    }
    res.status(200).json(available);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default bookingRouter;
