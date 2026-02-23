import { useEffect, useState } from "react";
import Viewer3D from "./components/Viewer3D";
import Controls from "./components/Controls";
import UploadForm from "./components/UploadForm";
import { saveSettings, getLatestSettings } from "./services/api";

export default function App() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [wireframe, setWireframe] = useState(false);
  const [modelUrl, setModelUrl] = useState("");

  useEffect(() => {
    getLatestSettings()
      .then((data) => {
        if (data) {
          setBgColor(data.bgColor || "#ffffff");
          setWireframe(!!data.wireframe);
          setModelUrl(data.modelUrl || "");
        }
      })
      .catch(() => {});
  }, []);

  const handleSave = async () => {
    await saveSettings({ bgColor, wireframe, modelUrl });
    alert("Settings saved ✅");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>3D Product Viewer</h2>

      <Viewer3D 
        bgColor={bgColor} 
        wireframe={wireframe} 
        modelUrl={modelUrl}
      />

      <Controls 
        bgColor={bgColor}
        setBgColor={setBgColor}
        wireframe={wireframe}
        setWireframe={setWireframe}
      />

      <UploadForm onModelUploaded={setModelUrl} />

      <button onClick={handleSave} style={{ marginTop: 12 }}>
        Save View Settings
      </button>
    </div>
  );
}