import ViewerSettings from "../models/ViewerSettings.js";

export const saveSettings = async (req, res) => {
  try {
    const { bgColor, wireframe, modelUrl } = req.body;

    const settings = await ViewerSettings.create({
      bgColor,
      wireframe,
      modelUrl,
    });

    res.json({ message: "Settings saved", settings });
  } catch (err) {
    res.status(500).json({ message: "Failed to save settings" });
  }
};

export const getLatestSettings = async (req, res) => {
  try {
    const settings = await ViewerSettings.findOne().sort({ createdAt: -1 });
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch settings" });
  }
};