// /lib/dbConnect.js
import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

let isConnected = false;

const dbConnect = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URL);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default dbConnect;

// export default dbConnect;
