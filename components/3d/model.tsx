import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Model() {
  const gltf = useLoader(GLTFLoader, '/animated_dog_shiba_inu.glb');

  return <primitive object={gltf.scene} scale={0.01} />;
}
