import { Canvas } from "@react-three/fiber";
import { VFC } from "react";
import Cube from "./components/cube";

const App: VFC = () => {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  );
};

export default App;
