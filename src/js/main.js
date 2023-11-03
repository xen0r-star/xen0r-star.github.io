// // import * as THREE from '/Three/';

// // const scene = new THREE.Scene();
// // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // camera.position.z = 5;
// // const renderer = new THREE.WebGLRenderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);

// // const platformGeometry = new THREE.PlaneGeometry(10, 10);
// // const platformMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// // const platform = new THREE.Mesh(platformGeometry, platformMaterial);
// // scene.add(platform);

// // const characterGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
// // const characterMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// // const character = new THREE.Mesh(characterGeometry, characterMaterial);
// // scene.add(character);

// // character.position.set(0, 1, 0);

// // // Variables pour le mouvement
// // const moveSpeed = 0.1;
// // const characterPosition = character.position.clone();

// // // Gérer les événements du clavier
// // const onKeyDown = (event) => {
// //   switch (event.key) {
// //     case "ArrowUp":
// //       characterPosition.z -= moveSpeed;
// //       break;
// //     case "ArrowDown":
// //       characterPosition.z += moveSpeed;
// //       break;
// //     case "ArrowLeft":
// //       characterPosition.x -= moveSpeed;
// //       break;
// //     case "ArrowRight":
// //       characterPosition.x += moveSpeed;
// //       break;
// //   }
// // };

// // document.addEventListener("keydown", onKeyDown);

// // const animate = () => {
// //   requestAnimationFrame(animate);

// //   // Mettre à jour la position du personnage
// //   character.position.set(characterPosition.x, characterPosition.y, characterPosition.z);

// //   renderer.render(scene, camera);
// // };

// // animate();



// var renderer = new THREE.WebGLRenderer({
//     canvas: document.getElementById('mainCanvas')
// });
// renderer.setClearColor(0x000000); // black

// var scene = new THREE.Scene();

// var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
// camera.position.set(0, 0, 5);
// camera.lookAt(new THREE.Vector3(0, 0, 0));
// scene.add(camera);

// var material = new THREE.MeshBasicMaterial({
//         color: 0xffffff // white
// });
// // plane
// var planeGeo = new THREE.PlaneGeometry(1.5, 1.5);
// var plane = new THREE.Mesh(planeGeo, material);
// plane.position.x = 1;
// scene.add(plane);

// // triangle
// var triGeo = new THREE.Geometry();
// triGeo.vertices = [new THREE.Vector3(0, -0.8, 0),
//         new THREE.Vector3(-2, -0.8, 0), new THREE.Vector3(-1, 0.8, 0)];
// triGeo.faces.push(new THREE.Face3(0, 2, 1));
// var triangle = new THREE.Mesh(triGeo, material);
// scene.add(triangle);

// renderer.render(scene, camera);