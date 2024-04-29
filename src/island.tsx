import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
// import { useEffect } from "react";

const Island = () => {
    const [ref] = useBox(() => ({ rotation: [0, 0, 0] }));
    const { scene } = useGLTF("../public/Island.gltf");

    return (
        <primitive object={scene} position={[0, 0, 0]} scale={[0.25, 0.25, 0.25]} ref={ref} />
    );
};

export default Island;