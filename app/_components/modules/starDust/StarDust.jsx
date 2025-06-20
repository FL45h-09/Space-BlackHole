'use client';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function StarDust() {
  const groupRef = useRef();
  const materialRef = useRef();

  const particles = useMemo(() => {
    const positions = [];
    const numParticles = 15500;
    const innerRadius = 0.2;
    const outerRadius = 2.2;
    for (let i = 0; i < numParticles; i++) {
      const r = innerRadius + Math.random() * (outerRadius - innerRadius);
      const theta = Math.random() * 3 * Math.PI;
      const x = r * Math.cos(theta);
      const y = (Math.random() - 0.5) * 0.05; // Very thin disk
      const z = r * Math.sin(theta);
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, []);

  // Pre-define colors for blending
  // const colorA = new THREE.Color('#ff4d00'); // reddish-orange
  const colorA = new THREE.Color('#ff991a'); // orange-yellow
  const colorB = new THREE.Color('#ff991a'); // orange-yellow
  const lerpedColor = new THREE.Color();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }

    // Animate brightness oscillation (sin wave 0→1→0 smoothly)
    const time = state.clock.getElapsedTime();
    const t = (Math.sin(time * 1.2) + 1) / 2; // 0 to 1 oscillation

    // Blend colors and apply
    lerpedColor.lerpColors(colorA, colorB, t);
    if (materialRef.current) {
      materialRef.current.color = lerpedColor;
    }
  });

  return (
    <group ref={groupRef}>
      <Points positions={particles}>
        <PointMaterial
          ref={materialRef}
          transparent
          size={0.025}
          sizeAttenuation
          depthWrite={false}
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}
