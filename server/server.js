import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import loveRoutes from "./route/data.route.js";
import cors from "cors"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin:process.env.FRONTEND_URL,
  methods:["GET", "POST"],
  credentials:true,
}));

// MongoDB connection
const connectDB = async () => {
  try {
    const dbURI = process.env.DB_URI;

    if (!dbURI) {
      console.error("DB_URI is not defined in .env file.");
    }

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

connectDB();

app.use("/api", loveRoutes);

// Server setup
const port = process.env.PORT_NO || 4000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
