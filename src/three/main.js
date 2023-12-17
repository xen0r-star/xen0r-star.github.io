import * as THREE from 'three';
import * as CANNON from 'cannon';
import * as MOVE from './move';

// Rendue
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xdcdcdc);
document.body.appendChild(renderer.domElement);


var worldSetting = {
  id: null,
  gravity: {
    x: 0,
    y: 0,
    z: -5
  }
}

const scene = new THREE.Scene();
worldSetting.id = new CANNON.World(); // Configuration moteur physique
worldSetting.id.gravity.set(worldSetting.gravity.x, worldSetting.gravity.y, worldSetting.gravity.z);


var cameraSetting = {
  id: null,
  spawn: {
    "x": 0,
    "y": -5,
    "z": 5
  }
};
cameraSetting.id = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

function screenResize(evnt) {
  cameraSetting.id = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
}
window.onresize = screenResize;

cameraSetting.id.position.set(cameraSetting.spawn.x, cameraSetting.spawn.y, cameraSetting.spawn.z);




var platformSetting = {
  id: null,
  geometry: null,
  material: null,
  shape: null,
  body: null,
  size: {
    x: 10,
    y: 10,
    z: 0.2
  }
}

platformSetting.geometry = new THREE.PlaneGeometry(platformSetting.size.x, platformSetting.size.y);
platformSetting.material = new THREE.MeshBasicMaterial({ color: 0x28ff80 });
platformSetting.id = new THREE.Mesh(platformSetting.geometry, platformSetting.material);
scene.add(platformSetting.id);

platformSetting.shape = new CANNON.Box(new CANNON.Vec3(platformSetting.size.x / 2, platformSetting.size.y / 2, platformSetting.size.z)); // moitier taille
platformSetting.body = new CANNON.Body({ mass: 0, shape: platformSetting.shape });
worldSetting.id.addBody(platformSetting.body);



var characterSetting = {
  id: null,
  geometry: null,
  material: null,
  shape: null,
  body: null,
  size: {
    x: 0.5,
    y: 0.5,
    z: 0.5
  },
  spawn: {
    x: 0,
    y: 1,
    z: 5
  },
  speed: 0.1,
  velocity: new THREE.Vector3(0, 0, 0),
  angularVelocity: 0,
}

characterSetting.geometry = new THREE.BoxGeometry(characterSetting.size.x, characterSetting.size.y, characterSetting.size.z); // moitier taille
characterSetting.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
characterSetting.id = new THREE.Mesh(characterSetting.geometry, characterSetting.material);
scene.add(characterSetting.id);

characterSetting.id.position.set(0, 1, 10);

// Physique
characterSetting.shape = new CANNON.Box(new CANNON.Vec3(characterSetting.size.x / 2, characterSetting.size.y / 2, characterSetting.size.z / 2)); // La moitié de la taille du cube
characterSetting.body = new CANNON.Body({ mass: 1, shape: characterSetting.shape });
worldSetting.id.addBody(characterSetting.body);

characterSetting.body.position.copy(characterSetting.id.position);
characterSetting.body.quaternion.copy(characterSetting.id.quaternion);



var keysMouve = {
  Up: "ArrowUp",
  Down: "ArrowDown",
  Left: "ArrowLeft",
  Right: "ArrowRight",
}

MOVE.moveObject(characterSetting, keysMouve);


const animate = () => {
  requestAnimationFrame(animate);

  MOVE.updateCamera(characterSetting, cameraSetting, 5, -3)

  worldSetting.id.step(1/60);

  characterSetting.id.position.copy(characterSetting.body.position);
  characterSetting.id.quaternion.copy(characterSetting.body.quaternion);

  // MOVE.respawn(characterSetting.id, -10, 25);

  renderer.render(scene, cameraSetting.id);
};

animate();