import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import uploadRoutes from "./src/routes/uploadRoutes.js";
import settingsRoutes from "./src/routes/settingsRoutes.js";

dotenv.config();
const app = express();

// CORS (Frontend allow)
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());
app.use("/uploads", express.static("uploads"));


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error("MongoDB error ❌", err.message));


app.use("/api/upload", uploadRoutes);
app.use("/api/settings", settingsRoutes);

app.get("/", (req, res) => res.send("API running ✅"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));