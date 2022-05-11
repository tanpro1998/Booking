import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectDB } from "./Database/Connect.js";
import authRouter from "./routes/authRoute.js";
import roomRouter from "./routes/roomRoute.js";
import bookingRouter from "./routes/bookingRoute.js";
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

ConnectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", bookingRouter);

app.get("/", (req, res) => {
  res.send("Hello to Flash API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
