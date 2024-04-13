import { usePlane } from "@react-three/cannon";

const Environment = () => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
    
    return (
        <mesh position={[0, 0, 0]} ref={ref}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color={"blue"} />
        </mesh>
    );
}

export default Environment;
