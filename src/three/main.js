import * as THREE from 'three';
import * as CANNON from 'cannon';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Stats from 'stats.js'

import shipAssets from '/public/assets/Ship.gltf'
import * as MOVE from './move';
import * as PERLINNOISE from './perlinNoise'

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





    
data.waterSetting.geometry = new THREE.PlaneGeometry(data.waterSetting.size.x, data.waterSetting.size.y, 9, 9);

const positions = data.waterSetting.geometry.attributes.position.array;
const perlinNoiseData = PERLINNOISE.Noise(data.waterSetting.waveSize.x, data.waterSetting.waveSize.y);

for (let i = 0; i < (positions.length / 3); i += 3) {

    const ligne = Math.floor(i / perlinNoiseData.length);
    const colonne = i % perlinNoiseData.length;
    positions[i + 2] = perlinNoiseData[ligne][colonne];
}

data.waterSetting.geometry.attributes.position.needsUpdate = true;


data.waterSetting.material = new THREE.MeshStandardMaterial({ color: 0x34ebe5, transparent: false, opacity: 1 });
data.waterSetting.id = new THREE.Mesh(data.waterSetting.geometry, data.waterSetting.material);

data.waterSetting.id.position.set(0, 0, 0);
scene.add(data.waterSetting.id);



// Cannon.js
data.waterSetting.shape = new CANNON.Box(new CANNON.Vec3(data.waterSetting.size.x / 2, data.waterSetting.size.y / 2, data.waterSetting.size.z / 2));
data.waterSetting.body = new CANNON.Body({ mass: 0, shape: data.waterSetting.shape });
data.waterSetting.body.position.copy(data.waterSetting.id.position); // Assurez-vous que la position du corps correspond à celle du maillage
data.worldSetting.id.addBody(data.waterSetting.body);





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



// Stat
var stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom

var graphicsDiv = document.createElement("div");
graphicsDiv.id = "graphics";

graphicsDiv.appendChild(stats.dom.childNodes[0]);
graphicsDiv.appendChild(stats.dom.childNodes[0]);
graphicsDiv.appendChild(stats.dom.childNodes[0]);
document.getElementById('stats').appendChild(graphicsDiv);

document.addEventListener("keydown", function(event) {
    if (event.key === "p" || event.key === "P") {
        console.log("Stat Page");
        document.getElementById("stats").style.display = (document.getElementById("stats").style.display == "block") ? "none" : "block";
    }
});


const canvas = document.getElementById('perlinNoise');
const ctx = canvas.getContext('2d');

function mapValueToColor(value, min, max) {
    const normalizedValue = (value - min) / (max - min);
    const colorValue = Math.floor(255 * normalizedValue);
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
}

const minValue = Math.min(...perlinNoiseData.flat());
const maxValue = Math.max(...perlinNoiseData.flat());

const canvasRatioX = canvas.width / perlinNoiseData.length;
const canvasRatioY = canvas.height / perlinNoiseData[0].length;

for (let i = 0; i < perlinNoiseData.length; i++) {
    for (let j = 0; j < perlinNoiseData[i].length; j++) {
        const value = perlinNoiseData[i][j];
        const color = mapValueToColor(value, minValue, maxValue);
        ctx.fillStyle = color;
        ctx.fillRect(i * canvasRatioX, j * canvasRatioY, canvasRatioX, canvasRatioY);
    }
}



// Boucle par frame
const animate = () => {
    requestAnimationFrame(animate);

    stats.begin();

    if (data.worldSetting.load.charged >= data.worldSetting.load.full && data.characterSetting.id != null) {

        MOVE.updateCamera(data.characterSetting, data.cameraSetting, 5, -3);

        data.worldSetting.id.step(1 / 60);

        data.characterSetting.id.position.copy(data.characterSetting.body.position);
        data.characterSetting.id.quaternion.copy(data.characterSetting.body.quaternion);

        MOVE.respawn(data.characterSetting, -10, 1000);

        renderer.render(scene, data.cameraSetting.id);
    }

    stats.end();
};

animate();