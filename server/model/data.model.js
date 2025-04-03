import mongoose from "mongoose";

// Define a schema for the Compatibility model
const compatibilitySchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    partnerName: {
      type: String,
      required: true,
    },
    compatibility: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true,
  }
);

const Compatibility = mongoose.model("Compatibility", compatibilitySchema);
export default Compatibility;
