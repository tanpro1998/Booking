import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomid: String,
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotel_managers",
  },
  type: String,
  price: Number,
  capacity: Number,
  facilities: [String],
  amenities: [String],
  img: [String],
});

const Room = mongoose.model("Room", roomSchema);

export { Room };
