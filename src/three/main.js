import * as THREE from 'three';
import * as CANNON from 'cannon';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import shipAssets from '/public/assets/Ship.gltf'
import * as MOVE from './move';

import dataImport from './data.json'
var data = dataImport
console.log("Data object", data)


// Rendue
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xdcdcdc);
document.body.appendChild(renderer.domElement);


// Scene
const scene = new THREE.Scene();
data.worldSetting.id = new CANNON.World(); // Configuration moteur physique
data.worldSetting.id.gravity.set(data.worldSetting.gravity.x, data.worldSetting.gravity.y, data.worldSetting.gravity.z);


// Camera
data.cameraSetting.id = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
function screenResize(evnt) {
    data.cameraSetting.id = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
}
window.onresize = screenResize;
data.cameraSetting.id.position.set(data.cameraSetting.spawn.x, data.cameraSetting.spawn.y, data.cameraSetting.spawn.z);


// Lumiere
data.lightCharacterSetting.id = new THREE.DirectionalLight(0xffffff, 1); // Couleur, Intensité
data.lightCharacterSetting.id.position.set(data.lightCharacterSetting.spawn.x, data.lightCharacterSetting.spawn.y, data.lightCharacterSetting.spawn.z);
scene.add(data.lightCharacterSetting.id);



// Platforme
data.platformSetting.geometry = new THREE.BoxGeometry(data.platformSetting.size.x, data.platformSetting.size.y, data.platformSetting.size.z);
data.platformSetting.material = new THREE.MeshStandardMaterial({ color: 0x34ebe5, transparent: false, opacity: 1 });
data.platformSetting.id = new THREE.Mesh(data.platformSetting.geometry, data.platformSetting.material);
scene.add(data.platformSetting.id);

data.platformSetting.id.position.set(0, 0, 0);

data.platformSetting.shape = new CANNON.Box(new CANNON.Vec3(data.platformSetting.size.x / 2, data.platformSetting.size.y / 2, data.platformSetting.size.z / 2)); // moitier taille
data.platformSetting.body = new CANNON.Body({ mass: 0, shape: data.platformSetting.shape });
data.worldSetting.id.addBody(data.platformSetting.body);



// Personnage
const loader = new GLTFLoader();
loader.load(shipAssets,
    function (gltf) {
        data.characterSetting.id = gltf.scene;
        scene.add(data.characterSetting.id);

        data.characterSetting.id.position.set(data.characterSetting.spawn.x, data.characterSetting.spawn.y, data.characterSetting.spawn.z);
        data.characterSetting.id.rotation.set(data.characterSetting.rotate.x, data.characterSetting.rotate.y, data.characterSetting.rotate.z);
        data.characterSetting.id.scale.set(data.characterSetting.size.x, data.characterSetting.size.y, data.characterSetting.size.z);

        // Physique
        data.characterSetting.velocity = new THREE.Vector3(0, 0, 0);
        data.characterSetting.angularVelocity = new THREE.Vector3(0, 0, 0);
        data.characterSetting.shape = new CANNON.Box(new CANNON.Vec3(data.characterSetting.size.x / 2, data.characterSetting.size.y / 2, data.characterSetting.size.z / 2)); // La moitié de la taille du cube
        data.characterSetting.body = new CANNON.Body({ mass: data.characterSetting.mass, shape: data.characterSetting.shape });
        data.worldSetting.id.addBody(data.characterSetting.body);

        data.characterSetting.body.position.copy(data.characterSetting.id.position);
        data.characterSetting.body.quaternion.copy(data.characterSetting.id.quaternion);

        // Mouvement personnage
        MOVE.moveObject(data.characterSetting, data.keysMouve);
    },
    function (xhr) {
        console.log(Math.trunc(xhr.loaded / xhr.total * 100) + '% loaded, time: ' + Math.trunc(xhr.timeStamp) + 'ms');
        data.worldSetting.load.charged = xhr.loaded;
        data.worldSetting.load.full = xhr.total;
    },
    function (error) {
        console.log('An error happened');
    }
);



// Boucle par frame
const animate = () => {
    requestAnimationFrame(animate);

    if (data.worldSetting.load.charged >= data.worldSetting.load.full && data.characterSetting.id != null) {

        MOVE.updateCamera(data.characterSetting, data.cameraSetting, 5, -3)

        data.worldSetting.id.step(1 / 60);

        data.characterSetting.id.position.copy(data.characterSetting.body.position);
        data.characterSetting.id.quaternion.copy(data.characterSetting.body.quaternion);

        MOVE.respawn(data.characterSetting, -10, 1000);

        renderer.render(scene, data.cameraSetting.id);
    }
};

animate();