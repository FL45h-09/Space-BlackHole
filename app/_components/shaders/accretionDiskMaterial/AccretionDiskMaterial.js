import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

const AccretionDiskMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor1: new THREE.Color('#ff8c00'),
    uColor2: new THREE.Color('#ff4500'),
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;

    void main() {
      float dist = distance(vUv, vec2(0.5));
      float alpha = smoothstep(0.2, 0.5, dist);
      float swirl = sin(dist * 50.0 - uTime * 4.0);
      vec3 color = mix(uColor1, uColor2, swirl);
      gl_FragColor = vec4(color, 1.0 - alpha);
    }
  `
)

extend({ AccretionDiskMaterial })
