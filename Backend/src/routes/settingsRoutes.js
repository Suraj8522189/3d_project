import express from "express";
import { saveSettings, getLatestSettings } from "../controllers/settingsController.js";

const router = express.Router();

router.post("/", saveSettings);
router.get("/", getLatestSettings);

export default router;
