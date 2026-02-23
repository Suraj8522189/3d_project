import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import uploadRoutes from "./src/routes/uploadRoutes.js";
import settingsRoutes from "./src/routes/settingsRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api/upload", uploadRoutes);
app.use("/api/settings", settingsRoutes);

app.get("/", (req, res) => res.send("API running"));

app.listen(5000, () => console.log("Server running on http://localhost:5000"));