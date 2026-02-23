import axios from "axios";

export const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${API}/api/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });

  return res.data;
};

export const saveSettings = async (settings) => {
  const res = await axios.post(`${API}/api/settings`, settings, {
    withCredentials: true,
  });
  return res.data;
};

export const getLatestSettings = async () => {
  const res = await axios.get(`${API}/api/settings`, {
    withCredentials: true,
  });
  return res.data;
};