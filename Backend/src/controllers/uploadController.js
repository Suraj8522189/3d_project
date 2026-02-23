export const uploadFile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    res.json({
      message: "File uploaded successfully",
      file: {
        filename: req.file.filename,
        path: `/uploads/${req.file.filename}`,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Upload failed" });
  }
};