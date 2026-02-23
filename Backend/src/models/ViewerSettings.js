import mongoose from "mongoose";

const viewerSettingsSchema = new mongoose.Schema(
  {
    bgColor: { type: String, default: "#ffffff" },
    wireframe: { type: Boolean, default: false },
    modelUrl: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("ViewerSettings", viewerSettingsSchema);