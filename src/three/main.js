import * as THREE from 'three';
import * as CANNON from 'cannon';
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import * as shipAssets from '/public/assets/Ship.gltf'

import * as MOVE from './move';

import dataImport from './data.json'
var data = dataImport
console.log(data)


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



// Platforme
data.platformSetting.geometry = new THREE.PlaneGeometry(data.platformSetting.size.x, data.platformSetting.size.y);
data.platformSetting.material = new THREE.MeshBasicMaterial({ color: 0x28ff80 });
data.platformSetting.id = new THREE.Mesh(data.platformSetting.geometry, data.platformSetting.material);
scene.add(data.platformSetting.id);

data.platformSetting.shape = new CANNON.Box(new CANNON.Vec3(data.platformSetting.size.x / 2, data.platformSetting.size.y / 2, data.platformSetting.size.z)); // moitier taille
data.platformSetting.body = new CANNON.Body({ mass: 0, shape: data.platformSetting.shape });
data.worldSetting.id.addBody(data.platformSetting.body);



// Personnage

// const loader = new GLTFLoader();
// loader.load(shipAssets,
// 	function ( gltf ) {
// 		data.characterSetting.id = gltf.scene;
// 		scene.add(data.characterSetting.id);
// 	},
//   function (xhr) { 
//     console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//   },
//   function (error) {
//     console.log('An error happened');
//   }
// );

data.characterSetting.geometry = new THREE.BoxGeometry(data.characterSetting.size.x, data.characterSetting.size.y, data.characterSetting.size.z); // moitier taille
data.characterSetting.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
data.characterSetting.id = new THREE.Mesh(data.characterSetting.geometry, data.characterSetting.material);
scene.add(data.characterSetting.id);

data.characterSetting.id.position.set(0, 1, 10);

// Physique
data.characterSetting.velocity = new THREE.Vector3(0, 0, 0);
data.characterSetting.shape = new CANNON.Box(new CANNON.Vec3(data.characterSetting.size.x / 2, data.characterSetting.size.y / 2, data.characterSetting.size.z / 2)); // La moitié de la taille du cube
data.characterSetting.body = new CANNON.Body({ mass: 1, shape: data.characterSetting.shape });
data.worldSetting.id.addBody(data.characterSetting.body);

data.characterSetting.body.position.copy(data.characterSetting.id.position);
data.characterSetting.body.quaternion.copy(data.characterSetting.id.quaternion);



// Mouvement personnage
MOVE.moveObject(data.characterSetting, data.keysMouve);

// Boucle par frame
const animate = () => {
  requestAnimationFrame(animate);

  MOVE.updateCamera(data.characterSetting, data.cameraSetting, 5, -3)

  data.worldSetting.id.step(1 / 60);

  data.characterSetting.id.position.copy(data.characterSetting.body.position);
  data.characterSetting.id.quaternion.copy(data.characterSetting.body.quaternion);

  MOVE.respawn(data.characterSetting, -10, 25);

  renderer.render(scene, data.cameraSetting.id);
};

animate();