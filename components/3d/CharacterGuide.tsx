"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CharacterGuide() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (coreRef.current && ringRef.current) {
      // Float the core
      coreRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1 - 1.5;
      
      // Rotate the rings
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      coreRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={[2, -1.5, 3]}>
      {/* AI Core Guide */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} wireframe />
      </mesh>
      
      <mesh ref={ringRef} position={[0, -1.5, 0]}>
        <torusGeometry args={[0.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}
