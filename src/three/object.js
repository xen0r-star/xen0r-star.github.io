let link = 'https://raw.githubusercontent.com/xen0r-star/xen0r-star.github.io/main'

var shipLink = null

if (NODE_ENV === 'online') {
    shipLink = link + '/public/assets/Ship.gltf';
    waterLink = link + '/public/assets/Water.gltf';
} else {
    shipLink = require('@public/assets/Ship.gltf');
    waterLink = require('@public/assets/Water.gltf');
}



const assets = {
    ship: shipLink,
    water: waterLink,
};

export default assets;