import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  hotelname: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "manager",
  },
  location: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

export { Hotel };
