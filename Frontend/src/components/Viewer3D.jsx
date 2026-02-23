import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url, wireframe }) {
  const { scene } = useGLTF(url);
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.wireframe = wireframe;
    }
  });
  return <primitive object={scene} scale={1.2} />;
}

export default function Viewer3D({ bgColor, wireframe, modelUrl }) {
  return (
    <Canvas style={{ height: "400px", background: bgColor }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} />
      {modelUrl ? (
        <Model url={modelUrl} wireframe={wireframe} />
      ) : (
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" wireframe={wireframe} />
        </mesh>
      )}
      <OrbitControls enableZoom enableRotate />
    </Canvas>
  );
}