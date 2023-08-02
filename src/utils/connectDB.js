import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    throw new Error("Couldn't connect to database.", error = 500)
  }
}

