import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Web3D() {
  return(
   <div className="h-screen"> 
      <Canvas camera={{position: [0, 0, 5]}}> 
        <OrbitControls/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[2, 2, 2]}/>
        <mesh>
          <boxGeometry args={[1, 1, 1]}/>
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
}
