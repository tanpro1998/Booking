import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
  }
};

export { ConnectDB };
