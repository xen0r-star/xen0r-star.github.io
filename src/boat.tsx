import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useEffect } from "react";

const Boat = () => {
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 5, 0] }));
    const { scene } = useGLTF("../public/Ship.gltf");

    const moveForward = () => {
        api.applyForce([-15, 0, 0], [-15, 0, 0]);
    };

    const moveBackward = () => {
        api.applyForce([15, 0, 0], [15, 0, 0]);
    };

    const stopMoving = () => {
        api.applyForce([0, 0, 0], [0, 0, 0]);
    };

    const handleKeyDown = (e) => {
        switch (e.key.toLowerCase()) {
            case "w":
                moveForward();
                break;
            case "s":
                moveBackward();
                break;
            default:
                break;
        }
    };

    const handleKeyUp = (e) => {
        if (e.key.toLowerCase() === "w" || e.key.toLowerCase() === "s") {
            stopMoving();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    });

    return (
        <primitive object={scene} position={[0, 5, 0]} scale={[0.25, 0.25, 0.25]} ref={ref} />
    );
};

export default Boat;
