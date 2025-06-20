'use client';
import BlackHoleCanvas from '@/_components/sections/cosmicBlackHole/BlackHoleCanvas';
import { useIsMobile } from '@/_components/shaders/isMobile/useIsMobile';

export default function HomePage() {
  const isMobile = useIsMobile();
  return (
      <main className={`w-screen ${isMobile ? "h-[calc(100vh-72px)]" : "h-[calc(100vh-52px)]"} m-0 overflow-hidden bg-black`}>
        <BlackHoleCanvas />
      </main>
  );
}