import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortCode: {
    type: String,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  clicks: {
    type: Number,
    default: 0
  },
  expiresAt: Date
}, { timestamps: true });

export default mongoose.model("Url", urlSchema);
