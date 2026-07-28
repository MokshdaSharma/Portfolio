"use client";

import { useScroll, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import Introduction from "../exhibits/Introduction";
import Experience from "../exhibits/Experience";
import Skills from "../exhibits/Skills";
import Projects from "../exhibits/Projects";
import Achievements from "../exhibits/Achievements";

export default function Hallway() {
  const scroll = useScroll();
  const groupRef = useRef<THREE.Group>(null);

  // Constants for layout
  const zSpacing = -15; // Distance between exhibits

  useFrame(() => {
    // We want the camera to move along the Z axis from 0 to some negative value
    // Let's move the group towards the camera so exhibits pass by
    if (groupRef.current) {
      const targetZ = scroll.offset * 75;
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        targetZ,
        0.1
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Decorative tech environment */}
      <NetworkGrid />

      {/* Exhibits */}
      <Exhibit position={[0, 0, 0]}>
        <Introduction />
      </Exhibit>
      
      <Exhibit position={[-3, 0, zSpacing * 1]}>
        <Skills />
      </Exhibit>
      
      <Exhibit position={[3, 0, zSpacing * 2]}>
        <Experience />
      </Exhibit>
      
      <Exhibit position={[-3, 0, zSpacing * 3]}>
        <Projects />
      </Exhibit>
      
      <Exhibit position={[3, 0, zSpacing * 4]}>
        <Achievements />
      </Exhibit>
      
      <Exhibit position={[0, 0, zSpacing * 5]}>
        <div className="glass-card p-10 text-center max-w-md mx-auto">
          <h2 className="font-bold text-3xl mb-4 neon-text">Initialize Connection</h2>
          <p className="text-slate-300 mb-6 font-mono text-sm">System ready for new collaborations.</p>
          <p className="text-cyan-400 font-mono mb-6">mokshda.official@gmail.com</p>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/MokshdaSharma" target="_blank" className="px-6 py-2 rounded-full border border-cyan-500/50 hover:bg-cyan-500/10 transition-colors font-mono text-sm">GitHub</a>
            <a href="https://www.linkedin.com/in/mokshda-sharma-55a913273/" target="_blank" className="px-6 py-2 rounded-full border border-blue-500/50 hover:bg-blue-500/10 transition-colors font-mono text-sm">LinkedIn</a>
          </div>
        </div>
      </Exhibit>
    </group>
  );
}

function Exhibit({ position, children }: { position: [number, number, number], children: React.ReactNode }) {
  return (
    <group position={position} scale={[0.15, 0.15, 0.15]}>
      <Html transform position={[0, 0, 0]}>
        <div className="select-none">
          {children}
        </div>
      </Html>
    </group>
  );
}

function NetworkGrid() {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 200; i++) {
      pts.push(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        -Math.random() * 100
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
