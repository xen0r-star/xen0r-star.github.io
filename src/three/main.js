import * as THREE from 'three';
import { updateCamera, moveObject } from './move';

// Rendue
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xdcdcdc);
document.body.appendChild(renderer.domElement);



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const CameraPositionSet = {
  "x": 0,
  "y": -5,
  "z": 5
};
camera.position.set(CameraPositionSet.x, CameraPositionSet.y, CameraPositionSet.z);



const platformGeometry = new THREE.PlaneGeometry(10, 10);
const platformMaterial = new THREE.MeshBasicMaterial({ color: 0x28ff80 });
const platform = new THREE.Mesh(platformGeometry, platformMaterial);
scene.add(platform);


const characterGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const characterMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const character = new THREE.Mesh(characterGeometry, characterMaterial);
scene.add(character);

character.position.set(0, 1, 0);


var move = {
  speed: 0.1,
  velocity: new THREE.Vector3(0, 0, 0),
  angularVelocity: 0,
}

var keysMouve = {
  Up: "ArrowUp",
  Down: "ArrowDown",
  Left: "ArrowLeft",
  Right: "ArrowRight",
}

moveObject(move, keysMouve);



const animate = () => {
  requestAnimationFrame(animate);

  updateCamera(character, camera, 5, -3, move.velocity, move.angularVelocity)

  renderer.render(scene, camera);
};

animate();