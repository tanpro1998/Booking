import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectDB } from "./Database/Connect.js";
import { authRouter } from "./routes/authRoute.js";

const app = express();
const PORT = process.env.PORT || 6000;
dotenv.config();

ConnectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
