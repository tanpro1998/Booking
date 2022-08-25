import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
    console.log(process.env.JWT_REFRESH_SECRET);
  } catch (err) {
    console.log(err);
  }
};

export { ConnectDB };
