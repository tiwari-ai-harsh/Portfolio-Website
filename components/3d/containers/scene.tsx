import {
  Environment,
  OrbitControls,
  PresentationControls,
  Stage,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from '../model';
import ModelLoader from './loader';

export default function Scene() {
  return (
    <div className="h-96">
      <Canvas
        // className="p-10 m-6"
        shadows
        dpr={[1, 2]}
        camera={{ position: [1, 0, 1], fov: 70 }}
        // resize={{ offsetSize: true }}
      >
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.15}
          penumbra={1}
          position={[10, 10, 10]}
          castShadow
        />
        <Suspense fallback={<ModelLoader />}>
          <PresentationControls
            speed={2}
            zoom={0.1}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={'sunset'}>
              <Model />
            </Stage>
          </PresentationControls>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}
