import * as THREE from 'three';

export function updateCamera(object, camera, distance, decalage) {
    if (object.id != null) {

        // Positionner objet
        object.id.translateX(object.velocity.x);
        object.id.rotateY(object.angularVelocity.y);

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
}


export function moveObject(move, keysMouve) {
    const onKeyDown = (event) => {
        switch (event.key) {
            case keysMouve.Down:
                move.velocity.x = -move.speed;
                break;
            case keysMouve.Up:
                move.velocity.x = move.speed;
                break;
            case keysMouve.Left:
                move.angularVelocity.y = move.speed;
                break;
            case keysMouve.Right:
                move.angularVelocity.y = -move.speed;
                break;
        }
    };

    const onKeyUp = (event) => {
        switch (event.key) {
            case keysMouve.Up:
            case keysMouve.Down:
                move.velocity.x = 0; // Arrêter avancer ou reculer
                break;
            case keysMouve.Left:
            case keysMouve.Right:
                move.angularVelocity.set(0, 0, 0); // Arrêter tourner
                break;
        }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
}



export function respawn(object, min, max) {
    if (object.id.position.z < min || object.id.position.z > max) {
        console.log("RESPAWN")
        object.id.position.set(object.spawn.x, object.spawn.y, object.spawn.z);
        object.id.rotation.set(object.rotate.x, object.rotate.y, object.rotate.z)
        object.velocity.set(0, 0, 0);
        object.angularVelocity.set(0, 0, 0);
        object.body.quaternion.set(0, 0, 0, 1);
    }
}


export function moveLight(light, object) {
    light.id.position.copy(object.id.position);
}