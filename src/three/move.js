import * as THREE from 'three';

export function updateCamera(object, camera, distance, decalage) {
    // Positionner objet
    object.id.translateY(object.velocity.y);
    object.id.rotateZ(object.angularVelocity);

    object.body.position.copy(object.id.position);
    object.body.quaternion.copy(object.id.quaternion);

    // Calculer nouvelle position camera
    const characterPosition = object.id.position.clone();
    const offset = new THREE.Vector3(0, decalage, distance);
    const cameraPosition = characterPosition.clone().add(offset);

    // Positionner camera
    camera.id.position.copy(cameraPosition);
    camera.id.lookAt(characterPosition);
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

export function respawn(object, min, max) {
    if (object.id.position.z < min || object.id.position.z > max) {
        object.id.position.set(object.spawn.x, object.spawn.y, object.spawn.z);
        object.id.rotation.set(0, 0, 0)
        characterBody.velocity.set(0, 0, 0);
        characterBody.angularVelocity.set(0, 0, 0);
    }
  }