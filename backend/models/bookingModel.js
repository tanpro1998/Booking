import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rooms",
  },
  start: Date,
  end: Date,
});

const Booking = mongoose.model("Booking", bookingSchema);

export { Booking };
