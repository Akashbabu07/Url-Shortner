import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("CONNECTED TO DATABASE");
  } catch (error) {
    console.log("DB Connection Error:", error.message);
    process.exit(1);
  }
};
