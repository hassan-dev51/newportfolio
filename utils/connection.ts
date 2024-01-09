import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("database connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONDODB_URL ?? "");

    isConnected = true;
  } catch (error) {
    console.log(error, "error in connecting to MongoDB");
  }
};
