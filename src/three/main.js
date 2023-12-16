import * as THREE from 'three';
import * as CANNON from 'cannon';
import { updateCamera, moveObject } from './move';

// Rendue
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xdcdcdc);
document.body.appendChild(renderer.domElement);



const scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const CameraPositionSet = {
  "x": 0,
  "y": -5,
  "z": 5
};
camera.position.set(CameraPositionSet.x, CameraPositionSet.y, CameraPositionSet.z);



// Configuration moteur physique Cannon.js
const world = new CANNON.World();
world.gravity.set(0, 0, -5);



let platformSize = {
  x: 10,
  y: 10,
  z: 0.2,
}

const platformGeometry = new THREE.PlaneGeometry(platformSize.x, platformSize.y);
const platformMaterial = new THREE.MeshBasicMaterial({ color: 0x28ff80 });
const platform = new THREE.Mesh(platformGeometry, platformMaterial);
scene.add(platform);

const platformShape = new CANNON.Box(new CANNON.Vec3(platformSize.x / 2, platformSize.y / 2, platformSize.z)); // moitier taille
const platformBody = new CANNON.Body({ mass: 0, shape: platformShape });
world.addBody(platformBody);



let characterSize = {
  x: 0.5,
  y: 0.5,
  z: 0.5,
}

const characterGeometry = new THREE.BoxGeometry(characterSize.x, characterSize.y, characterSize.z); // moitier taille
const characterMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const character = new THREE.Mesh(characterGeometry, characterMaterial);
scene.add(character);

character.position.set(0, 1, 10);

// Création cube physique Cannon.js
const characterShape = new CANNON.Box(new CANNON.Vec3(characterSize.x / 2, characterSize.y / 2, characterSize.z / 2)); // La moitié de la taille du cube
var characterBody = new CANNON.Body({ mass: 1, shape: characterShape });
world.addBody(characterBody);

characterBody.position.copy(character.position);
characterBody.quaternion.copy(character.quaternion);



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

  updateCamera(character, characterBody, camera, 5, -3, move.velocity, move.angularVelocity)

  world.step(1/60);

  character.position.copy(characterBody.position);
  character.quaternion.copy(characterBody.quaternion);


  renderer.render(scene, camera);
};

animate();