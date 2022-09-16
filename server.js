import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectDB } from "./Database/Connect.js";
import authRouter from "./routes/authRoute.js";
import roomRouter from "./routes/roomRoute.js";
import bookingRouter from "./routes/bookingRoute.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

ConnectDB();

app.use(
  cors({
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", bookingRouter);

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
