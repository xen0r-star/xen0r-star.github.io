import * as THREE from 'three';
import * as CANNON from 'cannon';


// import shipAssets from '/public/assets/Ship.gltf'
const shipAssets = "https://xen0r-star.github.io/build/assets/Ship.gltf"
import * as MOVE from './move';
import * as PERLINNOISE from './perlinNoise'
import { spawnCharacter } from './character';
import * as STATS from './stats'

import dataImport from './data.json'
var data = dataImport
console.log("Data object", data)


// Rendue
const renderer = new THREE.WebGLRenderer( { antialias : true } );
renderer.setPixelRatio( window.devicePixelRatio  );
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xdcdcdc);
renderer.shadowMap.enabled = true; 
document.body.appendChild(renderer.domElement);


// Scene
data.worldSetting.id = new THREE.Scene();
data.worldSetting.physics = new CANNON.World(); // Configuration moteur physique
data.worldSetting.physics.gravity.set(data.worldSetting.gravity.x, data.worldSetting.gravity.y, data.worldSetting.gravity.z);


// Camera
data.cameraSetting.id = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
function screenResize(evnt) {
    data.cameraSetting.id = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
}
window.onresize = screenResize;
data.cameraSetting.id.position.set(data.cameraSetting.spawn.x, data.cameraSetting.spawn.y, data.cameraSetting.spawn.z);


// Lumiere ambient
data.ambientLightSetting.id = new THREE.AmbientLight(0x404040);
data.worldSetting.id.add(data.ambientLightSetting.id);

// Ajout d'une lumière directionnelle pour simuler la lumière du soleil
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.castShadow = true
directionalLight.position.set(5, 5, 5);
data.worldSetting.id.add(directionalLight);



    
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
data.waterSetting.id.receiveShadow = true; 
data.worldSetting.physics.castShadow = true;

data.waterSetting.id.position.set(0, 0, 0);
data.worldSetting.id.add(data.waterSetting.id);



// Cannon.js
data.waterSetting.shape = new CANNON.Box(new CANNON.Vec3(data.waterSetting.size.x / 2, data.waterSetting.size.y / 2, data.waterSetting.size.z / 2));
data.waterSetting.body = new CANNON.Body({ mass: 0, shape: data.waterSetting.shape });
data.waterSetting.body.position.copy(data.waterSetting.id.position); // Assurez-vous que la position du corps correspond à celle du maillage
data.worldSetting.physics.addBody(data.waterSetting.body);





// Personnage
data.worldSetting, data.characterSetting = spawnCharacter(data.worldSetting, data.characterSetting, shipAssets);
MOVE.moveObject(data.characterSetting, data.keysMouve); // Mouvement personnage


// Stat
var stats =  STATS.start(perlinNoiseData)




document.addEventListener("keyup", function(event) {
    if (event.key === "r" || event.key === "R") {
        data.worldSetting.id.remove(data.characterSetting.id)
        data.worldSetting.physics.removeBody(data.characterSetting.body)
        // data.characterSetting.id.dispose()

        // data.characterSetting.id
        // data.characterSetting.id = null
        // data.characterSetting.shape = null
        // data.characterSetting.body = null
        // data.characterSetting.velocity = null
        // data.characterSetting.angularVelocity = null

        console.log("clear = ok")
        console.log(data.characterSetting)

        data.worldSetting, data.characterSetting = spawnCharacter(data.worldSetting, data.characterSetting, shipAssets);
    }
});




// Boucle par frame
const animate = () => {
    requestAnimationFrame(animate);

    stats.begin();

    if (data.worldSetting.load.charged >= data.worldSetting.load.full && data.characterSetting.id != null) {

        MOVE.updateCamera(data.characterSetting, data.cameraSetting, 5, -3);

        data.worldSetting.physics.step(1 / 60);

        data.characterSetting.id.position.copy(data.characterSetting.body.position);
        data.characterSetting.id.quaternion.copy(data.characterSetting.body.quaternion);

        MOVE.respawn(data.characterSetting, -10, 1000);

        STATS.update(data.characterSetting, data.waterSetting)

        renderer.render(data.worldSetting.id, data.cameraSetting.id);
    }

    stats.end();
};

animate();