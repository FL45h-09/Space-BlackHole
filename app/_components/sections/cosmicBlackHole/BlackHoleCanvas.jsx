'use client';
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';
import Starfield from '@/_components/modules/starfield/Starfield';
import StarDust from '@/_components/modules/starDust/StarDust';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useIsMobile } from '@/_components/shaders/isMobile/useIsMobile';
import { BlackHole } from '@/_components/modules/blackHole/BlackHole';
import { ParallaxController } from '@/_components/modules/parallaxController/ParallaxController';

// Canvas Scene Component
export default function BlackHoleCanvas() {
  const isMobile = useIsMobile();
  return (
    <Canvas camera={{ position: isMobile ? [0, 0, 7] : [0, 0, 5], fov: isMobile ? 60 : 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <BlackHole />
        <StarDust />
        <Starfield />
        <ParallaxController />
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.8} intensity={1.5} />
        </EffectComposer>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  );
}
