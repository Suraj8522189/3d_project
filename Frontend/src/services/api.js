import axios from "axios";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post("http://localhost:5000/api/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};

export const saveSettings = async (settings) => {
  const res = await axios.post("http://localhost:5000/api/settings", settings);
  return res.data;
};

export const getLatestSettings = async () => {
  const res = await axios.get("http://localhost:5000/api/settings");
  return res.data;
};