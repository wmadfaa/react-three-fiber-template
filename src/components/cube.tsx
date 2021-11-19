import { useFrame } from "@react-three/fiber";
import { useRef, VFC } from "react";

const Cube: VFC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * Math.PI;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * Math.PI;
  });

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry />
      <meshBasicMaterial />
    </mesh>
  );
};

export default Cube;
