'use client'

import { Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function CTA() {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (ref.current) {
      ref.current.material.emissiveIntensity = hovered ? 1.5 : 0.5
    }
  })

  return (
    <Text
      ref={ref}
      fontSize={0.5}
      color="#ffffff"
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      anchorX="center"
      anchorY="middle"
    >
      ENTER TO THE KOSMOS
    </Text>
  )
}
