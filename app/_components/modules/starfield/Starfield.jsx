import { Stars } from '@react-three/drei';

export default function Starfield() {
  return (
    <Stars
      radius={100}
      depth={50}
      count={10000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}
