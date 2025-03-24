import React, { Suspense, useEffect, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf", true); // Enable draco compression

  // Optimize rendering by reducing shadow map size
  const shadowMapSize = isMobile ? 512 : 1024;

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.8} // Reduced intensity for better performance
        castShadow
        shadow-mapSize={shadowMapSize}
      />
      <pointLight intensity={0.8} position={[0, 0, -1]} /> {/* Adjusted position and intensity */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.65} // Reduced scale for better performance
        position={isMobile ? [0, -2.5, -1.8] : [0, -3, -1.2]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMediaQueryChange = useCallback((event) => {
    setIsMobile(event.matches);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [handleMediaQueryChange]);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, Math.min(2, window.devicePixelRatio)]} // Limit DPR for better performance
      camera={{ position: [20, 3, 5], fov: isMobile ? 30 : 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
        antialias: false, // Disable antialiasing for better performance
      }}
      style={{ height: "100vh" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={false} // Disable damping for better performance
          rotateSpeed={0.5} // Reduce rotate speed
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

// Clean up GLTF cache when component unmounts
useGLTF.preload("./desktop_pc/scene.gltf");

export default ComputerCanvas;