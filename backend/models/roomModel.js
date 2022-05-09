import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    url: String,
    title: String,
    titleHeader: String,
    description: String,
    header: String,
    subHeader: String,
    view: String,
    size: String,
    adults: Number,
    children: Number,
    bedding: String,
    amenities: [String],
    paragraph: String,
    mainImage: String,
    rooms: Number,
    price: Number,
  },
  { timestamps: true }
);

const Rooms = mongoose.model("Room", roomSchema);

export default Rooms;
