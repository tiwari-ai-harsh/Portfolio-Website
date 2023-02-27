import { Html, useProgress } from '@react-three/drei';

export default function ModelLoader() {
  const { progress } = useProgress();
  return (
    <Html center className="text-white">
      {progress} % loaded
    </Html>
  );
}
