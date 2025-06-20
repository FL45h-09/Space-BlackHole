'use client';

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Stargate() {
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.002
    }
  })

  return (
    <mesh ref={ref} position={[0, 0, -1]}>
      <torusGeometry args={[2, 0.1, 16, 100]} />
      <meshStandardMaterial color="#3b82f6" emissive="#0ff" emissiveIntensity={0.5} />
    </mesh>
  )
}