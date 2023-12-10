import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const CameraPositionSet = {
  "x": 0,
  "y": -5,
  "z": 5
};
camera.position.set(CameraPositionSet.x, CameraPositionSet.y, CameraPositionSet.z);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xdcdcdc);
document.body.appendChild(renderer.domElement);



const platformGeometry = new THREE.PlaneGeometry(10, 10);
const platformMaterial = new THREE.MeshBasicMaterial({ color: 0x28ff80 });
const platform = new THREE.Mesh(platformGeometry, platformMaterial);
scene.add(platform);



const characterGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const characterMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const character = new THREE.Mesh(characterGeometry, characterMaterial);
scene.add(character);

character.position.set(0, 1, 0);



// Variables pour le mouvement
const moveSpeed = 0.1;
let velocity = new THREE.Vector3(0, 0, 0);
let angularVelocity = 0;

// Gérer les événements du clavier
const onKeyDown = (event) => {
  switch (event.key) {
    case "ArrowUp":
      velocity.y = -moveSpeed; // Avancer
      break;
    case "ArrowDown":
      velocity.y = moveSpeed; // Reculer
      break;
    case "ArrowLeft":
      angularVelocity = moveSpeed; // Tourner à gauche
      break;
    case "ArrowRight":
      angularVelocity = -moveSpeed; // Tourner à droite
      break;
  }
};

const onKeyUp = (event) => {
  switch (event.key) {
    case "ArrowUp":
    case "ArrowDown":
      velocity.y = 0; // Arrêter d'avancer ou de reculer
      break;
    case "ArrowLeft":
    case "ArrowRight":
      angularVelocity = 0; // Arrêter de tourner
      break;
  }
};

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

const animate = () => {
  requestAnimationFrame(animate);

  // Mettre à jour la position du personnage
  character.translateY(velocity.y);
  character.rotateZ(angularVelocity);

  // Mettre à jour la position de la caméra
  const relativeCameraOffset = new THREE.Vector3(CameraPositionSet.x, CameraPositionSet.y, CameraPositionSet.z); // Décalage par rapport à la voiture
  const cameraOffset = relativeCameraOffset.applyMatrix4(character.matrixWorld);
  camera.position.copy(cameraOffset);
  camera.lookAt(character.position);

  renderer.render(scene, camera);
};

animate();
