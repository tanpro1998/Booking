import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
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
};

const maxAge = 3 * 24 * 60 * 60;
let refreshTokens = [];
const generateAccessToken = (user) => {
    return jwt.sign({ id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET, {
            expiresIn: "5s",
        }
    );
};

const generateRefreshToken = (user) => {
    return jwt.sign({ id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_REFRESH_SECRET, { expiresIn: "3d" }
    );
};

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (user) {
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                const accessToken = generateAccessToken(user);
                const refreshToken = generateRefreshToken(user);
                res.cookie("access", accessToken, {
                    withCredentials: true,
                    httpOnly: false,
                    maxAge: maxAge * 1000,
                });
                res.cookie("refresh", refreshToken, {
                    withCredentials: true,
                    httpOnly: false,
                    maxAge: maxAge * 1000,
                });

                const { password, ...others } = user._doc;

                res.status(200).json({
                    auth: true,
                    ...others,
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
};

export const refresh = async (req, res) => {
    // const cookies = req.cookies;
    // if (!cookies?.refresh) return res.status(401);
    // const refreshToken = cookies.refresh;
    // res.clearCookie("refresh", {
    //   httpOnly: true,
    //   sameSite: "none",
    //   secure: true,
    //   withCredentials: true
    // });

    // const foundUser = await User.findOne({ refreshToken });
    // if (!foundUser) {
    //   jwt.verify(
    //     refreshToken,
    //     process.env.JWT_REFRESH_SECRET,
    //     async (err, decoded) => {
    //       if (err) return res.status(403);
    //       const hackedUser = await User.findOne({ username: decoded.username });
    //       hackedUser.refreshToken = [];
    //       await hackedUser.save();
    //     }
    //   );
    //   return res.status(403);
    // }
    // const newRefreshTokenArr = foundUser.refreshToken.filter(
    //   (rt) => rt !== refreshToken
    // );
    // jwt.verify(
    //   refreshToken,
    //   process.env.JWT_REFRESH_SECRET,
    //   async (err, decoded) => {
    //     if (err) {
    //       foundUser.refreshToken = [...newRefreshTokenArr];
    //       await foundUser.save();
    //     }
    //     if (err || foundUser.username !== decoded.username)
    //       return res.status(403);
    //     const accessToken = generateAccessToken(foundUser);
    //     const newRefreshToken = generateRefreshToken(foundUser);
    //     foundUser.refreshToken = [...newRefreshTokenArr, newRefreshToken];
    //     await foundUser.save();
    //     res.cookie("refresh", newRefreshToken, {
    //       httpOnly: true,
    //       secure: true,
    //       sameSite: "none",
    //       maxAge: 24 * 60 * 60 * 1000,
    //       withCredentials: true
    //     });
    //     res.json({ accessToken });
    //   }
    // );
    const refreshToken = req.cookies.refresh;
    if (!refreshToken) return res.status(401).json("You are not authenticated!");
    if (!refreshTokens.includes(refreshToken))
        return res.status(403).json("Refresh token is not valid!");

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
        err && console.log(err);
        refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        refreshTokens.push(newRefreshToken);
        res.cookie("access", newAccessToken, {
            httpOnly: true,
            sameSite: "strict",
            secure: false,
            path: "/",
            withCredentials: true,
        });
        res.cookie("refresh", newRefreshToken, {
            httpOnly: true,
            sameSite: "strict",
            secure: false,
            path: "/",
            withCredentials: true,
        });
        res
            .status(200)
            .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
    });
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};