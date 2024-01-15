import * as THREE from 'three';
import * as CANNON from 'cannon';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function spawnCharacter(dataWorld, dataCharacter, character) {
    const loader = new GLTFLoader();
    loader.load(character,
        function (gltf) {
            dataCharacter.id = gltf.scene;
            dataWorld.id.add(dataCharacter.id);

            dataCharacter.id.position.set(dataCharacter.spawn.x, dataCharacter.spawn.y, dataCharacter.spawn.z);
            dataCharacter.id.rotation.set(dataCharacter.rotate.x, dataCharacter.rotate.y, dataCharacter.rotate.z);
            dataCharacter.id.scale.set(dataCharacter.size.x, dataCharacter.size.y, dataCharacter.size.z);

            // Physique
            dataCharacter.velocity = new THREE.Vector3(0, 0, 0);
            dataCharacter.angularVelocity = new THREE.Vector3(0, 0, 0);
            dataCharacter.shape = new CANNON.Box(new CANNON.Vec3(dataCharacter.size.x / 2, dataCharacter.size.y / 2, dataCharacter.size.z / 2)); // La moitié de la taille du cube
            dataCharacter.body = new CANNON.Body({ mass: dataCharacter.mass, shape: dataCharacter.shape });
            dataWorld.physics.addBody(dataCharacter.body);

            dataCharacter.body.position.copy(dataCharacter.id.position);
            dataCharacter.body.quaternion.copy(dataCharacter.id.quaternion);
        },
        function (xhr) {
            console.log(Math.trunc(xhr.loaded / xhr.total * 100) + '% loaded, time: ' + Math.trunc(xhr.timeStamp) + 'ms');
            dataWorld.load.charged = xhr.loaded;
            dataWorld.load.full = xhr.total;
        },
        function (error) {
            console.log('An error happened', error);
        }
    );

    return dataWorld, dataCharacter
}