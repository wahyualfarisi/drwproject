"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.Material>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle rotation over time
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;

      // Mouse parallax effect
      const pointerX = state.pointer.x * 0.5;
      const pointerY = state.pointer.y * 0.5;
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        pointerX,
        0.05
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        pointerY,
        0.05
      );
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#C81E3A"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        wireframe={false}
      />
    </Sphere>
  );
}

export function GradientOrb() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
      {/* Pure CSS soft glow ring underneath */}
      <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full mix-blend-screen scale-75 animate-pulse" />
      
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 5, 2]} intensity={2} color="#1F2F52" />
        <directionalLight position={[-2, -5, -2]} intensity={2} color="#8B1336" />
        <React.Suspense fallback={null}>
          <Orb />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
