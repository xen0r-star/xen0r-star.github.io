import * as THREE from 'three';

export function updateCamera(object, camera, distance, decalage, velocity, angularVelocity) {
    // Positionner objet
    object.translateY(velocity.y);
    object.rotateZ(angularVelocity);

    // Calculer nouvelle position camera
    const characterPosition = object.position.clone();
    const offset = new THREE.Vector3(0, decalage, distance);
    const cameraPosition = characterPosition.clone().add(offset);

    // Positionner camera
    camera.position.copy(cameraPosition);
    camera.lookAt(characterPosition);
}

export function moveObject(move, keysMouve) {

    const onKeyDown = (event) => {
        switch (event.key) {
            case keysMouve.Down:
                move.velocity.y = -move.speed;
                break;
            case keysMouve.Up:
                move.velocity.y = move.speed;
                break;
            case keysMouve.Left:
                move.angularVelocity = move.speed;
                break;
            case keysMouve.Right:
                move.angularVelocity = -move.speed;
                break;
        }
    };

    const onKeyUp = (event) => {
        switch (event.key) {
            case keysMouve.Up:
            case keysMouve.Down:
                move.velocity.y = 0; // Arrêter avancer ou reculer
                break;
            case keysMouve.Left:
            case keysMouve.Right:
                move.angularVelocity = 0; // Arrêter tourner
                break;
        }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
}