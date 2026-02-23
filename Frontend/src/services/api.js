import axios from "axios";

export const API = import.meta.env.VITE_API_URL?.replace(/\/$/, "") || 
                   "https://threed-project-1.onrender.com";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${API}/api/upload`, formData);
  return res.data;
};

export const saveSettings = async (settings) => {
  const res = await axios.post(`${API}/api/settings`, settings);
  return res.data;
};

export const getLatestSettings = async () => {
  const res = await axios.get(`${API}/api/settings`);
  return res.data;
};