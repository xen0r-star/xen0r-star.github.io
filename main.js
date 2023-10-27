import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

// npx serve .

// Vérifier la compatibilité WebGL 
if (WebGL.isWebGLAvailable()) {

    // Création de la scène
    const scene = new THREE.Scene();

    // Configuration de la caméra
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    // Création du rendu
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);



    // Création du cube
    const geometry_cube = new THREE.BoxGeometry(10, 10, 10);
    const material_cube = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry_cube, material_cube);
    scene.add(cube);

    // Création d'une ligne bleu
    const material_line = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points_line = [];
    points_line.push(new THREE.Vector3(-10, 0, 0));
    points_line.push(new THREE.Vector3(0, 10, 0));
    points_line.push(new THREE.Vector3(10, 0, 0));
    points_line.push(new THREE.Vector3(5, 0, 0));
    points_line.push(new THREE.Vector3(5, -15, 0));
    points_line.push(new THREE.Vector3(-5, -15, 0));
    points_line.push(new THREE.Vector3(-5, 0, 0));
    points_line.push(new THREE.Vector3(-10, 0, 0));

    const geometry_line = new THREE.BufferGeometry().setFromPoints(points_line);
    const line = new THREE.Line(geometry_line, material_line);

    scene.add(line);

    line.position.y = 20;
    line.rotation.x = 180;



    // Boucle d'animation
    let stat_line = 1;

    function animate() {
        requestAnimationFrame(animate);
        if (line.position.y >= 25) {
            stat_line = 0;
        } else if (line.position.y <= 20) {
            stat_line = 1;
        }

        if (stat_line == 1) {
            line.position.y += 0.1;
        } else {
            line.position.y -= 0.1;
        }
        
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}