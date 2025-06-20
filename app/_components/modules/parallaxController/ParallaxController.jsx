'use client';
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';

export function ParallaxController() {
  const { camera } = useThree();

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return; // no parallax on mobile

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(camera.position, {
        x: x * 0.4,
        y: -y * 0.4,
        duration: 1,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [camera]);

  return null;
}
