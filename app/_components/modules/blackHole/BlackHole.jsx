// BlackHole Component (Accretion Disk, Photon Ring, Shadow)
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';


export function BlackHole() {
    const accretionRef = useRef();
    const lensingRef = useRef();
  
    // Accretion Disk ShaderMaterial with Doppler control
    const accretionDiskMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uDirectionAngle: { value: 0 }, // Control bright side direction (radians)
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform float uDirectionAngle;
  
        void main() {
          float r = length(vUv - vec2(0.5));
          float angle = atan(vUv.y - 1.5, vUv.x - 5.5);
  
          // Fade out alpha outside radius 0.25 (disk radius)
          float diskAlpha = smoothstep(0.32, 0.15, r);
  
          // Brightness peak centered at top (12 o'clock)
          float brightness = 0.6 + 0.4 * cos(angle - uDirectionAngle - 8.5708);
  
          vec3 color = mix(vec3(1.0, 0.3, 0.0), vec3(1.0, 0.6, 0.1), brightness);
  
          gl_FragColor = vec4(color, diskAlpha * brightness);
        }
      `,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
  
    // Optional: Adjust this to set bright side
    // Examples:
    // Right → 0
    // Top → Math.PI / 2
    // Left → Math.PI
    // Bottom → (3 * Math.PI) / 2
    accretionDiskMaterial.uniforms.uDirectionAngle.value = 1.5; // Right side bright
  
    useFrame((_, delta) => {
      accretionDiskMaterial.uniforms.uTime.value += delta;
      // accretionDiskMaterial.uniforms.uDirectionAngle.value += delta * 0.2; // slow rotation
    });
  
    return (
      <group>
        {/* Black Hole Shadow */}
        <mesh>
          <sphereGeometry args={[0.7, 64, 64]} />
          <meshBasicMaterial color="black" />
        </mesh>
  
        {/* Accretion Disk (Midplane) */}
        <mesh ref={accretionRef} rotation={[0, 0, 0]} material={accretionDiskMaterial}>
          <ringGeometry args={[0.1, 2.4, 56]} />
        </mesh>
  
        {/* Gravitational Lensing Disk (Mirrored Above/Below) */}
        {/* <mesh ref={lensingRef} rotation={[-Math.PI / 2.08, 0, 0]} material={accretionDiskMaterial}>
          <ringGeometry args={[0.6, 2.4, 256]} />
        </mesh> */}
      </group>
    );
  }