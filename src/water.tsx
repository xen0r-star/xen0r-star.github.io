import { useRef, useEffect, useState } from 'react';
import { Float32BufferAttribute } from 'three';
import { createNoise2D } from 'simplex-noise';
import { usePlane } from '@react-three/cannon';


function generateNoiseMatrix(size: number, scale: number): number[][] {
    const noise2D = createNoise2D();

    const matrix: number[][] = [];

    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            const noiseValue = noise2D(i * scale, j * scale);
            matrix[i][j] = noiseValue;
        }
    }

    return matrix;
}



const NOISE_SCALE = .5;
const WAVE_SCALE = .4;
const SIZE = 30;

const Water = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }));



    const [noiseMatrix, setNoiseMatrix] = useState(() => generateNoiseMatrix(SIZE + 1, NOISE_SCALE));

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Déplacer les colonnes vers la droite
            const shiftedMatrix = noiseMatrix.map(row => {
                const newRow = [...row];
                const lastValue = newRow.pop();
                newRow.unshift(lastValue);
                console.log(newRow)
                return newRow;
            });
            setNoiseMatrix(shiftedMatrix);
        }, 500);

        return () => {
            clearInterval(intervalId);
        };
    }, [noiseMatrix]);



    const geometryRef = useRef<Mesh>(null);

    useEffect(() => {
        if (geometryRef.current) {
            const vertices: number[] = [];
            for (let i = 0; i <= SIZE; i++) {
                for (let j = 0; j <= SIZE; j++) {
                    vertices.push(i - SIZE / 2, j - SIZE / 2, noiseMatrix[i][j] !== undefined ? noiseMatrix[i][j] * WAVE_SCALE : 0);
                }
            }
            geometryRef.current.setAttribute('position', new Float32BufferAttribute(vertices, 3));
        }
    }, [noiseMatrix]);



    return (
        <mesh ref={ref}>
            <planeGeometry ref={geometryRef} args={[SIZE, SIZE, SIZE, SIZE]} />
            <meshStandardMaterial color="blue" wireframe/>
        </mesh>
    );
};

export default Water;
