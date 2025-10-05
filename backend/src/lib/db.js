import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = ENV;
    if (!MONGO_URI) throw new Error("MONGO_URI is not set");

    await mongoose.connect(MONGO_URI);
    console.log("MONGODB CONNECTED ✅");
  } catch (error) {
    console.error("Error in connecting to MONGODB ⭕", error);
    process.exit(1);
  }
};
