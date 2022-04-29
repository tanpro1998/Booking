import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, username, password, cfPassword } = req.body;

  if (cfPassword !== password) {
    return res.status(400).json("Confirm Password does'nt match!");
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, username, password: hashPassword });
    await newUser.save();
    res.status(200).json("Register Success");
  } catch (err) {
    res.status(500).json(err);
  }
});

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: "5s",
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "3d" }
  );
};

authRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        res.status(200).json({
          auth: true,
          accessToken: accessToken,
          refreshToken: refreshToken,
          ...user._doc,
        });
      } else {
        res.status(400).json({ auth: false, err: "Wrong Password" });
      }
    } else {
      res.status(401).json("User does'nt exits ");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

export { authRouter };
