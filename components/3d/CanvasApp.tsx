"use client";

import { Canvas } from "@react-three/fiber";

import { useMemo } from "react";

function NetworkGrid() {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 200; i++) {
      pts.push(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        -Math.random() * 50 // Closer to camera
      );
    }
    return new Float32Array(pts);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#06b6d4" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function CanvasBackground() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-[#050814] -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={["#050814"]} />
        <fog attach="fog" args={["#050814", 10, 30]} />
        
        {/* Cyberpunk Lighting */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 10, 5]} intensity={0.5} color="#06b6d4" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#8b5cf6" />
        <pointLight position={[0, 0, 10]} intensity={0.5} color="#3b82f6" />
        
        <NetworkGrid />
      </Canvas>
    </div>
  );
}
