import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";

import Boat from "./boat";
import Environment from "./environment";
import './App.css'


const App = () => {

    return (
        <>
            <Canvas camera={{ fov: 75, near: 1, far: 1000, position: [5, 5, 0] }}>
                <Suspense fallback={null}>
                    <directionalLight position={[0, 0, 2]} intensity={1} />
                    <ambientLight intensity={1} />
                    <Physics>
                        <Environment />
                        <Boat />
                    </Physics>
                </Suspense>
            </Canvas>
        </>
    )
}

export default App
