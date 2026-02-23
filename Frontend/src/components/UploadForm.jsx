import { useState } from "react";
import { uploadFile } from "../services/api";

export default function UploadForm({ onModelUploaded }) {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");
    setStatus("Uploading...");
    try {
      const data = await uploadFile(file);
      setStatus("Uploaded ✅");
      if (file.name.endsWith(".glb") || file.name.endsWith(".gltf")) {
        onModelUploaded(`http://localhost:5000${data.file.path}`);
      }
    } catch (err) {
      setStatus("Upload failed ");
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <input 
        type="file" 
        accept=".glb,.gltf,image/*"
        onChange={(e) => setFile(e.target.files[0])} 
      />
      <button onClick={handleUpload} style={{ marginLeft: 10 }}>
        Upload
      </button>
      <p>{status}</p>
    </div>
  );
}